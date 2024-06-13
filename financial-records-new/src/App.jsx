import React from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import SharedRouter from "./shared/Router.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import QueryClientSetup from "./QueryClientSetup.jsx";

const App = () => {
  return (
    <>
      <QueryClientSetup>
        <AuthProvider>
          <UserProvider>
            <GlobalStyle />
            <SharedRouter />
          </UserProvider>
        </AuthProvider>
      </QueryClientSetup>
    </>
  );
};

export default App;
