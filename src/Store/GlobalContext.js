import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [globalContext, setGlobalContext] = useState({
    petition: "",
    nhc: "",
    authenticated: false,
  });

  const [loading, setLoading] = useState(false);

  const [language, setLanguage] = useState("esp");

  function handleContextState(data) {
    setGlobalContext(data);
  }

  function clearContext() {
    setGlobalContext({
      petition: "",
      nhc: "",
      authenticated: false,
      loading: false,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        globalContext,
        loading,
        handleContextState,
        setLoading,
        setLanguage,
        clearContext,
        language,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

GlobalContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

GlobalContextProvider.defaultProps = {
  children: {},
};
