import styled from "styled-components";
import { motion } from "framer-motion";

export const CardHeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
  padding-bottom: 2em;
`;

export const LogoContainer = styled.div`
  height: 1.5em;
  z-index: 5;
  flex-grow: 1;
  padding: 2em 0;
  display: flex;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const Card = styled.div`
  width: 375px;
  min-height: 667px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  padding-top: 0.25em;
`;

export const SubtitleText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  margin-top: 0.5em;
  width: 90%;
  line-height: 1.44;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7em;
`;

export const CardLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  width: 375px;
  position: fixed;
  z-index: 4;
  min-height: 450px;
  justify-content: flex-end;
`;

export const Backdrop = styled(motion.div)`
  width: 160%;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: rotate(160deg);
  top: -270px;
  left: -70px;
  z-index: 5;
  border-radius: 50%;
  background: rgb(0, 174, 66);
  background: linear-gradient(
    50deg,
    rgba(104, 104, 94, 1) 10%,
    rgba(15, 15, 20, 1) 100%
  );
`;

export const BackdropAnimation = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(65deg)",
  },
  collapes: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(160deg)",
  },
};

export const ExpandAnimation = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export const CardFooterContainer = styled.footer`
  color: #bbb;
  /* background: linear-gradient(
    50deg,
    rgba(15, 48, 28, 1) 15%,
    rgba(0, 174, 66, 1) 100%
  ); */
  padding: 1.1em;
  bottom: 0;
  width: 95%;
  text-align: center;
  font-size: 11px;
  position: absolute;
  font-size: 10px;
`;

export const FooterLink = styled.a`
  color: #bbb;
  font-weight: 500;
  z-index: 10;
  margin: 0.5em;
  line-height: 1.1;
  text-decoration: none;
  font-size: 10px;
`;
export const FooterSpan = styled.span`
  font-weight: 500;
  z-index: 10;
  margin: 0.5em;
  line-height: 1.1;
  font-size: 10px;
`;
