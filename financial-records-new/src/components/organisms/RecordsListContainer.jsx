import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import RecordBlock from "../molecules/RecordBlock.jsx";
import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../../lib/api/record.js";

const RecordsListContainer = () => {
  const {
    data: records = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["record"], queryFn: getRecords });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <RecordsUl>
      {records.length === 0 ? (
        <NoRecords>지출이 없습니다.</NoRecords>
      ) : (
        records.map((record) => (
          <RecordBlock
            key={record.id}
            id={record.id}
            date={record.date}
            item={record.item}
            amount={record.amount}
            description={record.description}
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
