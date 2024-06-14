import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <LoadingDiv>Loading...</LoadingDiv>
    </>
  );
};

const LoadingDiv = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export default Loading;
