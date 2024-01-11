import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.nav`
  background: #424242;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-radius: 10px;
  border: 0.1px solid #616161;
  justify-content: space-between;
  flex: 1;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: 15rem;
  border-radius: 50%;
`;

const StyledText = styled.p``;

const StyledNavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`;

const StyledNavLinkBox = styled(NavLink)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #bdbdbd;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #616161;
  }
`;

const StyledLogoutContainer = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;

  cursor: pointer;
`;

function Sidebar() {
  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledImg src="profile.jpg" alt="profile" />
        <StyledText>CHANCHOL</StyledText>
      </StyledInfoContainer>
      <StyledNavLinkContainer>
        <StyledNavLinkBox to="home">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </StyledNavLinkBox>
        <StyledNavLinkBox to="todolist">
          <i className="fa-solid fa-list"></i>
          <p>To-do-list</p>
        </StyledNavLinkBox>
        <StyledNavLinkBox to="diary">
          <i className="fa-solid fa-book"></i>
          <p>Diary</p>
        </StyledNavLinkBox>
      </StyledNavLinkContainer>
      <StyledLogoutContainer>
        <i className="fa-solid fa-right-from-bracket"></i> <p>Logout</p>
      </StyledLogoutContainer>
    </StyledContainer>
  );
}

export default Sidebar;
