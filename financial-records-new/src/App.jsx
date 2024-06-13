import React from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import SharedRouter from "./shared/Router.jsx";
import { RecordProvider } from "./contexts/RecordContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <RecordProvider>
            <GlobalStyle />
            <SharedRouter />
          </RecordProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default App;
