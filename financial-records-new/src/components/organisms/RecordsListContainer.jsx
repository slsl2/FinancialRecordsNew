import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import RecordBlock from "../molecules/RecordBlock.jsx";
import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../../lib/api/record.js";
import { useEffect, useState } from "react";

const RecordsListContainer = ({ selectedMonth }) => {
  const [filteredRecords, setFilteredRecords] = useState([]);
  const {
    data: records = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["record"], queryFn: getRecords });

  useEffect(() => {
    if (selectedMonth) {
      const filtered = records.filter(
        (record) => record.date.split("-")[1] === selectedMonth
      );
      setFilteredRecords(filtered);
    }
  }, [records, selectedMonth]); // records와 selectedMonth가 변경될 때마다 호출되도록 하기 위해

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <RecordsUl>
      {filteredRecords.length === 0 ? (
        <NoRecords>지출이 없습니다.</NoRecords>
      ) : (
        filteredRecords.map((filteredRecord) => (
          <RecordBlock
            key={filteredRecord.id}
            id={filteredRecord.id}
            date={filteredRecord.date}
            item={filteredRecord.item}
            amount={filteredRecord.amount}
            description={filteredRecord.description}
          />
        ))
      )}
    </RecordsUl>
  );
};

const RecordsUl = styled(StyledContainer).attrs({ as: "ul" })`
  font-size: 1.4rem;
  line-height: 150%;
`;

const NoRecords = styled.div`
  color: rgb(136, 136, 136);
  text-align: center;
  background-color: rgb(249, 249, 249);
  padding: 2rem;
`;

export default RecordsListContainer;
