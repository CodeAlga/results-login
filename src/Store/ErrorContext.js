import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => {
  const [errorContext, setErrorContext] = useState({
    errorText: "",
  });
  function handleErrorState(errorText) {
    setErrorContext({ errorText });
    toast.error(errorText);
  }
  function handleSuccessState(successText) {
    toast.success(successText);
  }
  function clearErrorContext() {
    setErrorContext({
      errorText: "",
    });
  }

  return (
    <ErrorContext.Provider
      value={{
        handleErrorState,
        handleSuccessState,
        clearErrorContext,
        errorContext,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;

ErrorContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

ErrorContextProvider.defaultProps = {
  children: {},
};
