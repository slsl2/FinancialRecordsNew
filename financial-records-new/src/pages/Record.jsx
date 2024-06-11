import React from "react";
import RecordUpdateContainer from "../components/organisms/RecordUpdateContainer";
import { useParams } from "react-router-dom";

const Record = ({ records, setRecords }) => {
  const { id } = useParams();
  return (
    <>
      <RecordUpdateContainer records={records} setRecords={setRecords} />
    </>
  );
};

export default Record;
