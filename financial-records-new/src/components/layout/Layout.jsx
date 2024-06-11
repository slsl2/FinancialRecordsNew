import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <HeaderLeft>
          {" "}
          <span>HOME</span>
          <span>내 프로필</span>
        </HeaderLeft>
        <HeaderRight>
          <div>사진</div>
          <span>아이디</span>
          <Button backgroundColor="#ff4d4d" color="white" contents="로그아웃" />
        </HeaderRight>
      </Header>
      <LayoutDiv>{children}</LayoutDiv>
    </>
  );
};

const Header = styled.div`
  padding: 2rem;
  background-color: #333;
  color: white;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  min-width: 480px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const LayoutDiv = styled.div`
  font-size: 2rem;
  width: 80%;
  max-width: 880px; /* 변경하기 */
  min-width: 480px; /* 변경하기 */
  margin: 0 auto; /* 왼쪽 오른쪽 margin이 동일해짐 */
`;

export default Layout;
