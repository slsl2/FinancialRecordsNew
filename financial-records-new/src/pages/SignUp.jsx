import React from "react";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer";
import Button from "../components/atoms/Button";

const SignUp = () => {
  return (
    <>
      <SignUpPage>
        {" "}
        <SignUpForm>
          <InputDiv>
            <span>회원가입 아이디</span>
            <Input />
          </InputDiv>
          <InputDiv>
            <span>비밀번호</span>
            <Input />
          </InputDiv>
          <InputDiv>
            <span>닉네임</span>
            <Input />
          </InputDiv>
          <Button
            width="100%"
            backgroundColor="#999"
            color="white"
            margin="0 0 1.6rem 0"
            contents="회원가입"
            type="button"
          />
          <Button
            width="100%"
            backgroundColor="#6c757d"
            color="white"
            contents="로그인"
            type="button"
          />
        </SignUpForm>
      </SignUpPage>
    </>
  );
};

export default SignUp;

const SignUpPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled(StyledContainer).attrs({ as: "form" })`
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
