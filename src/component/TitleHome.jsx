import styled from "styled-components";

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

function TitleHome({ title }) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledButton>
        <StyledIcon className="fa-solid fa-plus"></StyledIcon>
      </StyledButton>
    </StyledContainer>
  );
}
export default TitleHome;
