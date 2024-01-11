import styled from "styled-components";
import TitleHome from "./TitleHome";
import EditAndDelete from "./EditAndDelete";

const StyledListContainer = styled.ul`
  list-style: none;
  overflow: auto;
`;

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitleBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledIcon = styled.i`
  transition: all 0.2s ease;

  &:hover {
    color: #bdbdbd;
  }
`;

function TodolistHome() {
  return (
    <>
      <TitleHome title="To-do-list" />
      <StyledListContainer>
        <StyledList>
          <StyledTitleBox>
            <input type="checkbox" />
            <label>Final Project BTD</label>
          </StyledTitleBox>
          <EditAndDelete />
        </StyledList>
        <StyledList>
          <StyledTitleBox>
            <input type="checkbox" />
            <label>Running</label>
          </StyledTitleBox>
          <EditAndDelete />
        </StyledList>
        <StyledList>
          <StyledTitleBox>
            <input type="checkbox" />
            <label>Learn Next.js</label>
          </StyledTitleBox>
          <EditAndDelete />
        </StyledList>
      </StyledListContainer>
    </>
  );
}

export default TodolistHome;
