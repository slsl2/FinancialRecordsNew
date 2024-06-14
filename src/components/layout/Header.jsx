import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";
import Button from "../atoms/Button";
import { UserContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "정말 로그아웃 하시겠습니까?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
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
          <Link
            to="/profile"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <UserAvatar>
              <img src={user.avatar} alt="Avatar"></img>
            </UserAvatar>
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

const UserAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  overflow: hidden; /* 자식 요소가 부모 요소를 벗어나지 않도록 */
  position: relative; /* 자식 요소를 절대 위치로 배치하기 위해 필요 */
  border-radius: 50%;
  color: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너를 덮도록 설정 */
    position: absolute; /* 부모 요소를 기준으로 절대 위치 */
    top: 0;
    left: 0;
  }
`;

const UserNickname = styled.span`
  color: white;
  font-weight: 700;
`;

export default Header;
