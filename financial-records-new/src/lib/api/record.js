import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getRecords = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/records`);
    return response.data;
  } catch (error) {
    alert("에러입니다");
  }
};
