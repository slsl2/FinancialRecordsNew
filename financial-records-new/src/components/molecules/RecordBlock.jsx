import styled from "styled-components";
import { Link } from "react-router-dom";

const RecordBlock = ({ id, date, item, amount, description }) => {
  return (
    <RecordLi to={`/record/${id}`}>
      <div>
        <p>{date}</p>
        <RecordItemDescription>
          {item} - {description}
        </RecordItemDescription>
      </div>
      <RecordAmount>{amount}</RecordAmount>
    </RecordLi>
  );
};

const RecordLi = styled(Link)`
  margin: 1rem;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  padding: 1.6rem 2.2rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  &:hover {
    cursor: pointer;
  }
`;

const RecordItemDescription = styled.p`
  color: #4287f5;
  font-size: 1.6rem;
  font-weight: 600;
`;

const RecordAmount = styled.span`
  color: #4287f5;
  font-size: 1.6rem;
  font-weight: 600;
`;

export default RecordBlock;
