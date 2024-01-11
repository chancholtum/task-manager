import styled from "styled-components";
import TodolistHome from "../component/TodolistHome";
import Calendar from "../component/Calendar";
import DiaryHome from "../component/DiaryHome";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  background: #424242;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 0.1px solid #616161;
`;

const StyledDiaryBox = styled(StyledBox)`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <StyledContainer>
      <StyledBox>
        <TodolistHome />
      </StyledBox>
      <StyledBox>
        <Calendar />
      </StyledBox>
      <StyledDiaryBox>
        <DiaryHome />
      </StyledDiaryBox>
    </StyledContainer>
  );
}

export default Home;
