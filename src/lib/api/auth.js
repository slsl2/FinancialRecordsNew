import axios from "axios";
import Swal from "sweetalert2";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    Swal.fire({
      title: error?.response?.data?.message,
      confirmButtonText: "확인",
    });
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=60m`, {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: error?.response?.data?.message,
      confirmButtonText: "확인",
    });
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_HOST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "AccessToken이 만료되었습니다.",
        confirmButtonText: "확인",
      });
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(`${AUTH_API_HOST}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "프로필 변경 실패",
        confirmButtonText: "확인",
      });
    }
  }
};
