import React from "react";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Router from "./shared/Router.jsx";
import Layout from "./components/layout/Layout.jsx";
import { RecordProvider } from "./contexts/RecordContext.jsx";

const App = () => {
  return (
    <>
      <RecordProvider>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </RecordProvider>
    </>
  );
};

export default App;
