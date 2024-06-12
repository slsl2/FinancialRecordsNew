import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";
import Button from "../atoms/Button";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        {" "}
        <Link to="/">HOME</Link>
      </HeaderLeft>
      <HeaderRight>
        <div>사진</div>
        <Link to="/mypage">아이디</Link>
        {isAuthenticated ? (
          <Button
            backgroundColor="#ff4d4d"
            color="white"
            contents="로그아웃"
            onClick={handleLogout}
          />
        ) : (
          <>
            <Link to="/login">
              <Button
                backgroundColor="#8cbaff"
                color="white"
                contents="로그인"
              />
            </Link>
            <Link to="/signup">
              <Button
                backgroundColor="#8cbaff"
                color="white"
                contents="회원가입"
              />
            </Link>
          </>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
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

export default Header;
