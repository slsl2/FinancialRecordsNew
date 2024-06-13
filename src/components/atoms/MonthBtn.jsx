import styled, { css } from "styled-components";

const MonthBtn = ({ month, selectedMonth, onClick }) => {
  return (
    <li key={month}>
      <MonthButton onClick={onClick} $selected={month === selectedMonth}>
        {month}월
      </MonthButton>
    </li>
  );
};

const MonthButton = styled.button`
  width: 10rem;
  height: 6rem;
  margin: 1rem;
  border-radius: 10px;
  border: none;
  color: black;
  font-size: 1.6rem;

  ${(props) =>
    props.$selected &&
    css`
      background-color: #2ec4b6;
      color: white;
    `}

  ${(props) =>
    !props.$selected &&
    css`
      background-color: #f6f7fa;
      color: black;
      &:hover {
        background-color: #2ec4b6;
        color: white;
      }
    `}
`;

export default MonthBtn;
