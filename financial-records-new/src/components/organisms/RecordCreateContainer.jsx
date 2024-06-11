import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";
import { RecordContext } from "../../contexts/RecordContext";
import Button from "../atoms/Button";
import { v4 as uuidv4 } from "uuid";

const RecordCreateContainer = () => {
  const { records, setRecords } = useContext(RecordContext);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // 초기값을 현재 날짜로
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const dateRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 날짜 입력 필드에 포커스를 설정
    dateRef.current.focus();
  }, []);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const AddRecord = (e) => {
    e.preventDefault();
    if (!date || !item.trim() || !amount.trim() || !description.trim()) {
      alert("모두 입력해주세요");
      return;
    }
    setRecords((records) => [
      ...records,
      { id: uuidv4(), date, item, amount: +amount, description },
    ]);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
    dateRef.current.focus();
  };

  return (
    <>
      {" "}
      <RecordForm onSubmit={AddRecord}>
        <InputDiv>
          <span>날짜</span>
          <Input ref={dateRef} onChange={handleDate} type="text" value={date} />
        </InputDiv>
        <InputDiv>
          <span>항목</span>
          <Input
            onChange={handleItem}
            type="text"
            value={item}
            placeholder="지출 항목"
          />
        </InputDiv>
        <InputDiv>
          <span>금액</span>
          <Input
            onChange={handleAmount}
            type="number"
            value={amount}
            placeholder="지출 금액"
          />
        </InputDiv>
        <InputDiv>
          <span>내용</span>
          <Input
            onChange={handleDescription}
            type="text"
            value={description}
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
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  width: 15rem;
`;

export default RecordCreateContainer;
