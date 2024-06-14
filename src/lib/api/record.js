import axios from "axios";
import Swal from "sweetalert2";

const recordsUrl = import.meta.env.VITE_REACT_APP_RECORDS;

export const getRecords = async () => {
  try {
    const response = await axios.get(`${recordsUrl}/records`);
    return response.data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "데이터를 로드하지 못 했습니다!",
      confirmButtonText: "확인",
    });
  }
};

export const getRecord = async ({ queryKey }) => {
  try {
    const response = await axios.get(`${recordsUrl}/records/${queryKey[1]}`);
    return response.data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "데이터를 로드하지 못 했습니다!",
      confirmButtonText: "확인",
    });
  }
};

export const postRecord = async (newRecord) => {
  try {
    const { data } = await axios.post(`${recordsUrl}/records`, newRecord);
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "데이터를 로드하지 못 했습니다!",
      confirmButtonText: "확인",
    });
  }
};

export const putRecord = async (updatedRecord) => {
  const { id, ...rest } = updatedRecord; // id, createdBy 제외 다른 건 (rest things) 바뀔 것이다
  try {
    const { data } = await axios.put(`${recordsUrl}/records/${id}`, rest);
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "수정 실패!",
      confirmButtonText: "확인",
    });
  }
};

export const deleteRecord = async (id) => {
  try {
    const { data } = await axios.delete(`${recordsUrl}/records/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "삭제 실패!",
      confirmButtonText: "확인",
    });
  }
};
