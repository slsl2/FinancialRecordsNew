import React, { useState } from "react";
import RecordCreateContainer from "../components/organisms/RecordCreateContainer.jsx";
import SelectMonthContainer from "../components/organisms/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/organisms/RecordsListContainer.jsx";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  return (
    <>
      <RecordCreateContainer setSelectedMonth={setSelectedMonth} />
      <SelectMonthContainer
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <RecordsListContainer selectedMonth={selectedMonth} />
    </>
  );
};

export default Home;
