import React from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import SharedRouter from "./shared/Router.jsx";
import { RecordProvider } from "./contexts/RecordContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RecordProvider>
          <GlobalStyle />
          <SharedRouter />
        </RecordProvider>
      </AuthProvider>
    </>
  );
};

export default App;
