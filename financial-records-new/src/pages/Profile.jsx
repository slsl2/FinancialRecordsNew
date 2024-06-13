import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer.jsx";
import Button from "../components/atoms/Button.jsx";
import { UserContext } from "../contexts/UserContext.jsx";
import { updateProfile } from "../lib/api/auth.js";

const Profile = () => {
  const [newNickname, setNewNickname] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setNewNickname(user.nickname);
      setPreviewAvatar(user.avatar);
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (newNickname.length < 2 || newNickname.length > 10) {
      alert("닉네임은 2글자에서 10글자 이내로만 가능합니다!");
      return;
    }

    const formData = new FormData();
    formData.append("nickname", newNickname);
    if (newAvatar) {
      formData.append("avatar", newAvatar);
    } else {
      formData.append("avatar", user.avatar);
    }
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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ProfilePage>
        <ProfileContainer>
          <UserId>@{user.userId}</UserId>
          {previewAvatar && (
            <AvatarPreview src={previewAvatar} alt="Avatar Preview" />
          )}
          <InputDiv>
            <Input type="file" accept="image/*" onChange={handleAvatarChange} />
          </InputDiv>
          <InputDiv>
            <span>닉네임</span>
            <Input
              type="text"
              maxLength="10"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
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
          <Link style={{ width: "100%" }} to="/">
            <Button
              width="100%"
              backgroundColor="#6c757d"
              color="white"
              margin="0 0 1.6rem 0"
              contents="취소"
              type="button"
            ></Button>
          </Link>
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

const UserId = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  font-weight: 700;
  background-color: #29b4c4;
  color: white;
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

const AvatarPreview = styled.img`
  width: 70%;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export default Profile;
