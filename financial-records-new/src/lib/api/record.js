import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getRecords = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/records`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터를 로드하지 못 했습니다!");
  }
};

export const getRecord = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/records/${queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터를 로드하지 못 했습니다!");
  }
};

export const postRecord = async (newRecord) => {
  try {
    const { data } = await axios.post(`${JSON_SERVER_HOST}/records`, newRecord);
    return data;
  } catch (error) {
    console.log(error);
    alert("데이터를 로드하지 못 했습니다!");
  }
};

export const putRecord = async (updatedRecord) => {
  const { id, ...rest } = updatedRecord; // id, createdBy 제외 다른 건 (rest things) 바뀔 것이다
  try {
    const { data } = await axios.put(`${JSON_SERVER_HOST}/records/${id}`, rest);
    return data;
  } catch (error) {
    console.log(error);
    alert("수정 실패!");
  }
};

export const deleteRecord = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/records/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    alert("삭제 실패!");
  }
};
