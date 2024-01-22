import styled from "styled-components";
import TodolistHome from "../component/TodolistHome";
import Calendar from "../component/Calendar";
import DiaryHome from "../component/DiaryHome";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 0.5fr;
  gap: 2rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media screen and (max-width: 972px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
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

function Home({ events, setEvents, diaries, setDiaries, dateFormatToDisplay }) {
  return (
    <StyledContainer>
      <StyledBox>
        <TodolistHome events={events} setEvents={setEvents} />
      </StyledBox>
      <StyledBox>
        <Calendar events={events} setEvents={setEvents} />
      </StyledBox>
      <StyledDiaryBox>
        <DiaryHome
          diaries={diaries}
          setDiaries={setDiaries}
          dateFormatToDisplay={dateFormatToDisplay}
        />
      </StyledDiaryBox>
    </StyledContainer>
  );
}

export default Home;
