import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer.jsx";
import RecordBlock from "../molecules/RecordBlock.jsx";

const RecordsListContainer = ({ filteredRecords }) => {
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
