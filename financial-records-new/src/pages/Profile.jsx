import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer.jsx";
import Button from "../components/atoms/Button.jsx";
import { UserContext } from "../contexts/UserContext.jsx";
import { updateProfile } from "../lib/api/auth.js";

const Profile = () => {
  const [newNickname, setNewNickname] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", newNickname);
    formData.append("avatar", newAvatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      confirm("프로필 변경 성공!");
      navigate("/");
    }
  };

  return (
    <>
      <ProfilePage>
        <ProfileContainer>
          <span>{user.id}</span>
          <InputDiv>
            <span>닉네임</span>
            <Input
              type="text"
              minLength="2"
              maxLength="10"
              onChange={(e) => setNewNickname(e.target.value)}
              placeholder="닉네임"
            />
          </InputDiv>
          <InputDiv>
            <span>프로필 사진</span>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setNewAvatar(e.target.files[0])}
            />
          </InputDiv>
          <Button
            width="100%"
            backgroundColor="#999"
            color="white"
            margin="0 0 1.6rem 0"
            contents="완료"
            type="button"
            onClick={handleUpdateProfile}
          />
        </ProfileContainer>
      </ProfilePage>
    </>
  );
};

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem;
`;

const ProfileContainer = styled(StyledContainer).attrs({ as: "div" })`
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

export default Profile;
