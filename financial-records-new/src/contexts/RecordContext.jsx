import React, { createContext, useState, useEffect } from "react";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchFakeRecords = async () => {
      try {
        const response = await fetch("/Fake.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFakeRecords();
  }, []);

  return (
    <RecordContext.Provider value={{ records, setRecords }}>
      {children}
    </RecordContext.Provider>
  );
};
