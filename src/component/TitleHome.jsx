import styled from "styled-components";
import { useState } from "react";

import CreateTask from "./modals/CreateTask";
import CreateDiary from "./modals/CreateDiary";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
`;

const StyledButton = styled.button`
  background: inherit;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledIcon = styled.i`
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.1s ease;

  &:hover {
    background: #757575;
  }
`;

function TitleHome({ title, create, events, setEvents, diaries, setDiaries }) {
  const [modal, setModal] = useState(false);
  function toggle() {
    setModal(!modal);
  }

  return (
    <>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledButton onClick={toggle}>
          <StyledIcon
            data-testid="createTaskAndDiary"
            className="fa-solid fa-plus"
          ></StyledIcon>
        </StyledButton>
      </StyledContainer>
      {create === "task" ? (
        <CreateTask
          toggle={toggle}
          modal={modal}
          events={events}
          setEvents={setEvents}
        />
      ) : (
        <CreateDiary
          toggle={toggle}
          modal={modal}
          diaries={diaries}
          setDiaries={setDiaries}
        />
      )}
    </>
  );
}
export default TitleHome;
