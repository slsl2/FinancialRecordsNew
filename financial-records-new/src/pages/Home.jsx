import React, { useState } from "react";
import RecordCreateContainer from "../components/organisms/RecordCreateContainer.jsx";
// import SelectMonthContainer from "../components/organisms/SelectMonthContainter.jsx";
import RecordsListContainer from "../components/organisms/RecordsListContainer.jsx";

const Home = () => {
  return (
    <>
      <RecordCreateContainer />
      {/* <SelectMonthContainer
        records={records}
        setRecords={setRecords}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        setFilteredRecords={setFilteredRecords}
      /> */}
      <RecordsListContainer />
    </>
  );
};

export default Home;
