import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { login } from "../lib/api/auth.js";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { UserContext } from "../contexts/UserContext.jsx";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login: authLogin } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    const { userId, nickname, avatar, accessToken } = await login({
      id: id,
      password: password,
    });

    setUser({ userId, nickname, avatar });

    if (accessToken) {
      authLogin(accessToken);
      confirm("로그인 성공!");
      navigate("/");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <>
      <LoginPage>
        <LoginForm>
          <InputDiv>
            <span>로그인 아이디</span>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
            />
          </InputDiv>
          <InputDiv>
            <span>비밀번호</span>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </InputDiv>
          <Button
            width="100%"
            backgroundColor="#999"
            color="white"
            margin="0 0 1.6rem 0"
            contents="로그인"
            type="button"
            onClick={handleLogin}
          />
          <Link to="/signup">
            <Button
              width="100%"
              backgroundColor="#6c757d"
              color="white"
              contents="회원가입"
              type="button"
            />
          </Link>
        </LoginForm>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.div`
  margin: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled(StyledContainer).attrs({ as: "div" })`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  max-width: 480px;
  margin: 0;
  padding: 4rem;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
const Input = styled.input`
  font-size: 1.4rem;
  margin: 0.8rem 0 1.6rem 0;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
`;
