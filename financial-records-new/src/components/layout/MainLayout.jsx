import React from "react";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainLayoutDiv>{children}</MainLayoutDiv>
    </>
  );
};

const MainLayoutDiv = styled.div`
  font-size: 2rem;
  width: 80%;
  max-width: 880px; /* 변경하기 */
  min-width: 480px; /* 변경하기 */
  margin: 0 auto; /* 왼쪽 오른쪽 margin이 동일해짐 */
`;

export default MainLayout;
