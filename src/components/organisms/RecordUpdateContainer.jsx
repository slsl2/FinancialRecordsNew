import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import Button from "../atoms/Button.jsx";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteRecord, getRecord, putRecord } from "../../lib/api/record.js";

const RecordUpdateContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateRef = useRef(null);

  const {
    data: selectedRecord,
    isLoading,
    error,
  } = useQuery({ queryKey: ["records", id], queryFn: getRecord });

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedRecord) {
      setDate(selectedRecord.date);
      setItem(selectedRecord.item);
      setAmount(selectedRecord.amount);
      setDescription(selectedRecord.description);
      dateRef.current.focus();
    }
  }, [selectedRecord]);

  const mutationUpdate = useMutation({
    mutationFn: putRecord,
    onSuccess: () => {
      navigate("/");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteRecord,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleUpdateRecord = () => {
    const updatedRecord = {
      id: id,
      date: date,
      item: item,
      amount: parseInt(amount, 10),
      description: description,
      createdBy: selectedRecord.createdBy,
    };

    mutationUpdate.mutate(updatedRecord);
  };

  const handleDeleteRecord = () => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      return false;
    }
    mutationDelete.mutate(id);
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RecordUpdateDiv>
        <RecordUpdateForm>
          <span>날짜</span>
          <Input
            ref={dateRef}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span>항목</span>
          <Input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <span>금액</span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>내용</span>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </RecordUpdateForm>
        <BtnsDiv>
          <Button
            backgroundColor="#4287f5"
            color="white"
            contents="수정 완료"
            type="button"
            width="100%"
            onClick={handleUpdateRecord}
          ></Button>
          <Button
            backgroundColor="#ff4d4d"
            color="white"
            margin="0 1rem 0 0"
            contents="삭제"
            type="button"
            width="100%"
            onClick={handleDeleteRecord}
          ></Button>
          <Button
            backgroundColor="#6c757d"
            color="white"
            contents="뒤로 가기"
            type="button"
            width="100%"
            onClick={goBack}
          ></Button>
        </BtnsDiv>
      </RecordUpdateDiv>
    </>
  );
};

const RecordUpdateDiv = styled(StyledContainer).attrs({ as: "div" })`
  font-size: 1.4rem;
`;
const RecordUpdateForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.4rem;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;

const BtnsDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default RecordUpdateContainer;
