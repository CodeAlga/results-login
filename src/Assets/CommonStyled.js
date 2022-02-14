import styled from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SoftLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const SoftText = styled.p`
  font-size: 13px;
  font-weight: 500;
  padding: 0.5em;
  color: rgba(200, 200, 200, 0.8);
  text-align: center;
  margin-bottom: 1em;
  ${(props) =>
    props.black && "color: black; font-weight: 700; font-size: 15px;"};
`;

export const HighlightLink = styled.a`
  font-size: 12px;
  color: #00ae42;
  font-weight: 500;
  text-decoration: none;
`;

export const HighlightText = styled.p`
  font-size: 44px;
  font-weight: 700;
  padding: 0.7em;
  color: ${(props) => (props.textColor === "NEGATIVO" ? "#00ae42" : "#d63230")};
`;

export const StyledInput = styled.input`
  height: 42px;
  border: 3px solid transparent;
  outline: 1px solid rgba(50, 50, 50, 0.5);
  padding: 10px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  text-transform: uppercase;

  &::placeholder {
    color: rgba(200, 200, 200, 0.9);
  }
  &::not(::last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.3);
  }
  &:focus {
    outline: 1px solid rgba(50, 50, 50, 0.2);
    border-bottom: 3px solid #333;
    transition: all 0.2s ease-in-out;
  }
`;

export const SubmitButton = styled.button`
  width: 75%;
  padding: 1.1em;
  margin: 1.1em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    50deg,
    rgba(36, 36, 40, 1) 65%,
    rgba(66, 66, 70, 1) 100%
  );
  transition: all 0.2s linear;

  &:focus {
    outline: none;
  }

  :disabled {
    pointer-events: none;
    filter: opacity(25%);
    transition: all 0.2s linear;
  }
`;

export const ResultadosLink = styled.a`
  width: 65%;
  padding: 1.1em;
  margin: 1.1em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    50deg,
    rgba(66, 66, 70, 1) 56%,
    rgba(36, 36, 40, 1) 100%
  );
  transition: all 0.2s linear;

  &:focus {
    outline: none;
  }

  :disabled {
    pointer-events: none;
    filter: opacity(25%);
    transition: all 0.2s linear;
  }
`;

export const Select = styled.select`
  height: 35px;
  width: 18%;
  background: transparent;
  color: #ddd;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 35px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
