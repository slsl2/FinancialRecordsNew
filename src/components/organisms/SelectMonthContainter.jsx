import styled from "styled-components";
import MonthBtn from "../atoms/MonthBtn.jsx";
import StyledContainer from "../../styles/StyledContainer.jsx";

const SelectMonthContainer = ({ selectedMonth, setSelectedMonth }) => {
  const monthArr = Array(12)
    .fill()
    .map((value, i) => (i + 1).toString().padStart(2, "0"));

  const selectMonth = (month) => {
    setSelectedMonth(month);
  };

  return (
    <MonthsUl>
      {monthArr.map((month) => (
        <MonthBtn
          key={month}
          month={month}
          selectedMonth={selectedMonth}
          onClick={() => selectMonth(month)}
        />
      ))}
    </MonthsUl>
  );
};

const MonthsUl = styled(StyledContainer).attrs({ as: "ul" })`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default SelectMonthContainer;
