import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Loader from "react-loader-spinner";

import {
  CardHeaderContainer,
  Card,
  CardHeader,
  LogoContainer,
  Logo,
  CardContent,
  CardLoader,
  HeaderText,
  SubtitleText,
  Backdrop,
  BackdropAnimation,
  ExpandAnimation,
} from "../Assets/Card";
import {
  Select,
  FormContainer,
  SoftText,
  StyledInput,
  SubmitButton,
} from "../Assets/CommonStyled";

import { ErrorContext } from "../Store/ErrorContext";
import { GlobalContext } from "../Store/GlobalContext";
import Footer from "./Footer";

import EchevarneLogo from "../Assets/EchevarneLogo_Blanco_2019.svg";

function Form() {
  const history = useHistory();
  const { handleErrorState, handleSuccessState } = useContext(ErrorContext);
  const {
    handleContextState,
    loading,
    setLoading,
    language,
    setLanguage,
  } = useContext(GlobalContext);
  const spanish = "esp";

  const [peti, setPeti] = useState(String);
  const [NHC, setNHC] = useState(String);

  const [isExpanded, setExpanded] = useState(true);

  const playTransition = () => {
    setExpanded(!isExpanded);
  };

  const goToPdf = (user) => {
    if (NHC === user.nhc) {
      handleContextState({
        petition: peti,
        nhc: user.nhc,
        authenticated: true,
        loading: false,
      });

      setLoading(false);
      playTransition();

      setTimeout(() => {
        playTransition();
        history.push("/resultado");
      }, 1000);
    } else {
      setLoading(false);
      handleErrorState(
        language === spanish ? "La NHC es incorrecta" : "Invalid NHC"
      );
    }
  };

  const validateData = async () => {
    let user = {};

    setLoading(true);
    await axios
      .get(`${process.env.PUBLIC_URL}/pdf/${peti}/data.json`)
      .then((res) => {
        user = res.data;
        goToPdf(user);
      })
      .catch((err) => {
        setLoading(false);
        console.log(
          "%cerr",
          "background-color: fuchsia ; color: white ; font-weight: bold ; font-size: 20px",
          { err }
        );
        handleErrorState(
          language === spanish
            ? "Nº de petición no valido"
            : "Invalid Test number"
        );
      });
  };

  const getNHC = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.PUBLIC_URL}/pdf/${peti}/data.json`)
      .then(async (res) => {
        const user = res.data;
        const token = Buffer.from(`ECHEVARNE:LK34As25`).toString("base64");
        const data = {
          sender: "Echevarne",
          recipients: [{ to: user.mobil }],
          smsText: `${language === spanish ? "Su NHC es " : "Your NHC is "} ${
            user.nhc
          }`,
        };
        console.log(token, { data });
        axios({
          method: "POST",
          url: "https://results-login.herokuapp.com/smsText",
          data,
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
          },
        })
          // await fetch("https://results-login.herokuapp.com/smsText", {
          //   method: "POST",
          //   mode: "no-cors",
          //   headers: {
          //     // Authorization: `Basic ${token}`,
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(data),
          // })
          .then((response) => {
            setLoading(false);
            console.log(response.data);
            if (response.data.statusCode === 1000) {
              handleSuccessState(
                language === spanish
                  ? "Se ha enviado un SMS"
                  : "An SMS has been sent"
              );
            } else
              handleErrorState(
                language === spanish
                  ? "No se ha podido enviar el SMS"
                  : "The SMS could not be sent"
              );
          })
          .catch((error) => {
            setLoading(false);
            console.log(
              "%cerr",
              "background-color: midnightblue ; color: white ; font-weight: bold ; font-size: 20px",
              { error }
            );
            handleErrorState(
              language === spanish
                ? "No se ha podido enviar el SMS"
                : "The SMS could not be sent"
            );
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(
          "%cerr",
          "background-color: fuchsia ; color: white ; font-weight: bold ; font-size: 20px",
          { err }
        );
        handleErrorState(
          language === spanish
            ? "Nº de petición no valido"
            : "Invalid Test number"
        );
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  }, []);

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
            {language === spanish ? "Bienvenido" : "Welcome"}
          </HeaderText>
          <SubtitleText>
            {language === spanish
              ? "Introduzca el número de"
              : "Write the test "}
            <br />{" "}
            {language === spanish ? "petición y NHC" : "number and the NHC"}
          </SubtitleText>
        </CardHeader>
      </CardHeaderContainer>
      {loading && (
        <CardLoader>
          <Loader
            type="RevolvingDot"
            color="#333"
            height={100}
            width={100}
            timeout={300000}
          />
        </CardLoader>
      )}
      <CardContent>
        <FormContainer>
          <StyledInput
            type="text"
            placeholder="S00102030"
            maxLength="9"
            aria-label={
              language === spanish ? "Número de petición" : "Test number"
            }
            label={language === spanish ? "Número de petición" : "Test number"}
            disabled={loading}
            autoFocus
            onChange={(e) => {
              e.preventDefault();
              setPeti(e.target.value.toUpperCase().split(" ").join(""));
              // TODO add format handling if time
            }}
          />
          <SoftText>
            {language === spanish ? "Número de petición" : "Test number"}
          </SoftText>
          <StyledInput
            type="text"
            placeholder="1234567"
            maxLength="10"
            aria-label="NHC"
            label="NHC"
            disabled={loading || !peti}
            onChange={(e) => {
              e.preventDefault();
              setNHC(e.target.value.toUpperCase());
            }}
          />
          <SoftText>NHC</SoftText>
        </FormContainer>
        {NHC.length >= 7 ? (
          <SubmitButton
            disabled={NHC.length <= 6}
            type="submit"
            onClick={() => validateData()}
          >
            {language === spanish ? "Consultar resultados" : "See results"}
          </SubmitButton>
        ) : (
          <SubmitButton
            disabled={peti.length <= 8 || loading}
            type="submit"
            onClick={() => getNHC()}
          >
            {language === spanish ? "Recuperar NHC" : "Recover NHC"}
          </SubmitButton>
        )}
      </CardContent>
      <Footer />
    </Card>
  );
}

export default Form;
