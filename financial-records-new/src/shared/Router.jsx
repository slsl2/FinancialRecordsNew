import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Record from "../pages/Record.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Profile from "../pages/Profile.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { UserContext } from "../contexts/UserContext.jsx";
import Header from "../components/layout/Header.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";
import { getUserInfo } from "../lib/api/auth.js";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo) {
        setUser({
          userId: userInfo.id,
          nickname: userInfo.nickname,
          avatar: userInfo.avatar,
        });
      } else {
        setUser(null);
        logout();
      }
    };
    fetchUserInfo();
  }, [setUser, logout]);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 profile로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/profile" />;
};

const SharedRouter = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <>
      <Router>
        <Header />
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute
                  element={Home}
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
                />
              }
            />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/signup" element={<PublicRoute element={SignUp} />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={Profile} />}
            />
            <Route
              path="/record/:id"
              element={<PrivateRoute element={Record} />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default SharedRouter;
