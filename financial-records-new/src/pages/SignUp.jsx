import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { register } from "../lib/api/auth.js";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    if (password.length < 8 || password.length > 15) {
      alert("비밀번호는 8글자에서 15글자 이내로만 가능합니다!");
      return;
    }
    if (nickname.length < 2 || nickname.length > 10) {
      alert("닉네임은 2글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <>
      <SignUpPage>
        <SignUpForm>
          <InputDiv>
            <span>회원가입 아이디</span>
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
          <InputDiv>
            <span>닉네임</span>
            <Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname"
            />
          </InputDiv>
          <Button
            width="100%"
            backgroundColor="#999"
            color="white"
            margin="0 0 1.6rem 0"
            contents="회원가입"
            type="button"
            onClick={handleRegister}
          />
          <Link style={{ width: "100%" }} to="/login">
            <Button
              width="100%"
              backgroundColor="#6c757d"
              color="white"
              contents="로그인"
              type="button"
            />
          </Link>
        </SignUpForm>
      </SignUpPage>
    </>
  );
};

export default SignUp;

const SignUpPage = styled.div`
  margin: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled(StyledContainer).attrs({ as: "div" })`
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
