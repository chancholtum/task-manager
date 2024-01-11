import { Outlet } from "react-router-dom";
import styled from "styled-components";

import SideBar from "./Sidebar";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  gap: 3rem;
  padding: 3rem;
`;

const StyledMain = styled.main`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 0.1px solid #616161;

  flex: 5;
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
