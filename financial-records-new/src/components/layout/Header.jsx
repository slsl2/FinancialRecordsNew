import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";
import Button from "../atoms/Button";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);

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
        <Link to="/" style={{ color: "white" }}>
          HOME
        </Link>
      </HeaderLeft>
      <HeaderRight>
        {user && (
          <Link to="/profile">
            <UserAvatar src={user.avatar} alt="User Avatar"></UserAvatar>
            <UserNickname>{user.nickname}</UserNickname>
          </Link>
        )}
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
  gap: 2rem;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  color: white;
`;

const UserNickname = styled.span`
  color: white;
`;

export default Header;
