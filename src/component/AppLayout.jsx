import { Outlet } from "react-router-dom";
import styled from "styled-components";

import SideBar from "./Sidebar";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  margin: 0 auto;
  gap: 3rem;
  padding: 2rem;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const StyledMain = styled.main`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 0.1px solid #616161;
  min-height: 100%;
  flex: 5;

  @media screen and (max-width: 768px) {
    flex: 2;
  }
`;

function AppLayout() {
  return (
    <StyledContainer>
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
}

export default AppLayout;
