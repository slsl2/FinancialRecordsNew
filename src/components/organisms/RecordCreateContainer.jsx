import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";
import Button from "../atoms/Button";
import { v4 as uuidv4 } from "uuid";
import { postRecord } from "../../lib/api/record";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const RecordCreateContainer = ({ setSelectedMonth }) => {
  const { user } = useContext(UserContext);

  const [newDate, setNewDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // 초기값을 현재 날짜로
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const dateRef = useRef(null);

  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postRecord,
    onSuccess: () => {
      // 새롭게 fetch
      queryClient.invalidateQueries(["records"]);
      navigate(0);
    },
  });

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 날짜 입력 필드에 포커스를 설정
    dateRef.current.focus();
    // 컴포넌트가 마운트될 때 selectedMonth를 현재 날짜의 월로 설정
    const initialMonth = newDate.split("-")[1];
    setSelectedMonth(initialMonth);
  }, [newDate, setSelectedMonth]);

  const handleDate = (e) => {
    setNewDate(e.target.value);
  };
  const handleItem = (e) => {
    setNewItem(e.target.value);
  };
  const handleAmount = (e) => {
    setNewAmount(e.target.value);
  };
  const handleDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (
      !newDate ||
      !newItem.trim() ||
      !newAmount.trim() ||
      !newDescription.trim()
    ) {
      alert("모두 입력해주세요");
      return;
    }
    const newRecord = {
      id: uuidv4(),
      date: newDate,
      item: newItem,
      amount: parseInt(newAmount, 10),
      description: newDescription,
      createdBy: user.userId,
    };

    mutation.mutate(newRecord);

    setNewDate("");
    setNewItem("");
    setNewAmount("");
    setNewDescription("");
    dateRef.current.focus();
  };
  return (
    <>
      <RecordForm onSubmit={handleAddRecord}>
        <InputDiv>
          <span>날짜</span>
          <Input
            ref={dateRef}
            onChange={handleDate}
            type="date"
            value={newDate}
          />
        </InputDiv>
        <InputDiv>
          <span>항목</span>
          <Input
            onChange={handleItem}
            type="text"
            value={newItem}
            placeholder="지출 항목"
          />
        </InputDiv>
        <InputDiv>
          <span>금액</span>
          <Input
            onChange={handleAmount}
            type="number"
            value={newAmount}
            placeholder="지출 금액"
          />
        </InputDiv>
        <InputDiv>
          <span>내용</span>
          <Input
            onChange={handleDescription}
            type="text"
            value={newDescription}
            placeholder="지출 내용"
          />
        </InputDiv>
        <Button
          width="8rem"
          backgroundColor="#4287f5"
          color="white"
          margin="1rem 0 0 0"
          contents="저장"
          type="submit"
        ></Button>
      </RecordForm>
    </>
  );
};

const RecordForm = styled(StyledContainer).attrs({ as: "form" })`
  font-size: 1.4rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 1.4rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 15rem;
`;

export default RecordCreateContainer;
