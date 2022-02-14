import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  CardHeaderContainer,
  Card,
  LogoContainer,
  Logo,
  CardHeader,
  CardContent,
  HeaderText,
  SubtitleText,
  Backdrop,
  BackdropAnimation,
  ExpandAnimation,
} from "../Assets/Card";
import {
  SoftText,
  SubmitButton,
  ResultadosLink,
  Select,
} from "../Assets/CommonStyled";
import { GlobalContext } from "../Store/GlobalContext";
import { ErrorContext } from "../Store/ErrorContext";
import Footer from "./Footer";

import EchevarneLogo from "../Assets/EchevarneLogo_Blanco_2019.svg";

function Resultado() {
  const history = useHistory();
  const [isExpanded, setExpanded] = useState(true);
  const {
    clearContext,
    globalContext,
    setLoading,
    language,
    setLanguage,
  } = useContext(GlobalContext);
  const { clearErrorContext } = useContext(ErrorContext);

  const { petition, nhc } = globalContext;

  const spanish = "esp";

  const playTransition = () => {
    setExpanded(!isExpanded);
  };

  const handleGoOut = () => {
    setLoading(false);
    setTimeout(() => {
      playTransition();
      history.push("/");
      playTransition();
      clearContext();
      clearErrorContext();
    }, 1000);
  };

  useEffect(() => {
    if (!nhc || !petition) {
      history.push("/");
    } else {
      setTimeout(() => {
        setExpanded(false);
      }, 500);
    }
  }, [nhc, petition, history]);
  return (
    <Card>
      <CardHeaderContainer>
        <Backdrop
          initial={false}
          animate={
            isExpanded ? BackdropAnimation.expanded : BackdropAnimation.collapes
          }
          variants={BackdropAnimation}
          transition={ExpandAnimation}
        />
        <CardHeader>
          <LogoContainer component="a" href="/" className="logo-box">
            <Logo alt="Echevarne Logo" src={EchevarneLogo} className="logo" />
            <Select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="esp">Esp</option>
              <option value="eng">Eng</option>
            </Select>
          </LogoContainer>
          <HeaderText>
            {language === spanish ? "Gracias," : "Thank you,"}
          </HeaderText>
          <SubtitleText>
            {language === spanish
              ? "Aqui tiene su resultado."
              : "Here are your result"}
          </SubtitleText>
        </CardHeader>
      </CardHeaderContainer>
      <CardContent>
        <SoftText black>
          {language === spanish
            ? "Pulse el botón para ver sus resultados:"
            : "Click the button to see your results"}
        </SoftText>
        <ResultadosLink
          href={`${process.env.PUBLIC_URL}/pdf/${petition}/${petition}.pdf`}
          target="_blanck"
        >
          {language === spanish ? "Ver resultados" : "See the results"}
        </ResultadosLink>
        <SubmitButton type="button" onClick={() => handleGoOut()}>
          {language === spanish ? "Salir" : "Go out"}
        </SubmitButton>
      </CardContent>
      <Footer />
    </Card>
  );
}

export default Resultado;
