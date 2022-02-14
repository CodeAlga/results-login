import React, { useContext } from "react";

import { GlobalContext } from "../Store/GlobalContext";

import { CardFooterContainer, FooterLink, FooterSpan } from "../Assets/Card";

const Footer = () => {
  const { language } = useContext(GlobalContext);

  const spanish = "esp";

  return (
    <CardFooterContainer>
      <FooterSpan className="footerTypo">2021 &copy;</FooterSpan>
      <FooterSpan className="footerTypo">Laboratorio Echevarne</FooterSpan>|
      <FooterSpan className="footerTypo">
        {language === spanish
          ? "Todos los derechos reservados"
          : "All rights reserved"}
      </FooterSpan>
      |
      <FooterSpan className="footerTypo">
        {language === spanish
          ? "Registro Dep. Sanidad E08026305"
          : "Health Dep. register E08026305"}
      </FooterSpan>
      |
      <FooterLink
        className="footerTypo"
        target="blank"
        href="https://laboratorioechevarne.com/aviso-legal-echevarne/"
      >
        {language === spanish ? "Aviso legal" : "Legal warning"}
      </FooterLink>
      |
      <FooterLink
        className="footerTypo"
        target="blank"
        href="https://laboratorioechevarne.com/politica-de-cookies-echevarne/"
      >
        {language === spanish ? "Política de Cookies" : "Cookies policy"}
      </FooterLink>
      |
      <FooterLink
        className="footerTypo"
        target="blank"
        href="https://laboratorioechevarne.com/politica-privacidad-laboratorio-analisis-echevarne/"
      >
        {language === spanish ? "Política de privaciodad" : "Privacy policy"}
      </FooterLink>
      |
      <FooterLink
        className="footerTypo"
        target="blank"
        href="https://laboratorioechevarne.com/politica-de-proteccion-de-datos-laboratorio-de-analisis-echevarne/"
      >
        {language === spanish
          ? "Política de protección de Datos"
          : "Data protection policy"}
      </FooterLink>
      |
      <FooterLink
        className="footerTypo"
        target="blank"
        href="https://laboratorioechevarne.com/politica-de-redes-sociales/"
      >
        {language === spanish
          ? "Política de Redes Sociales"
          : "Social Media policy"}
      </FooterLink>
      |
      <FooterLink href="tel:+34900909110" className="footerTypo">
        Tel. 900 909 110
      </FooterLink>
    </CardFooterContainer>
  );
};

export default Footer;
