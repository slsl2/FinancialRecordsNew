import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Record from "../pages/Record.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import MyPage from "../pages/MyPage.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Header from "../components/layout/Header.jsx";
import Layout from "../components/layout/Layout.jsx";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 mypage로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
};

const SharedRouter = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  return (
    <>
      <Router>
        <Header />
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
                />
              }
            />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/signup" element={<PublicRoute element={SignUp} />} />
            <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
            <Route path="/record/:id" element={<Record />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default SharedRouter;
