import { useEffect, useState } from "react";
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
  height: calc(100vh - 4rem);

  @media screen and (max-width: 640px) {
    gap: 1rem;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 640px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 15rem;
  border-radius: 50%;

  @media screen and (max-width: 640px) {
    width: 8rem;
  }

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

const StyledNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const StyledText = styled.p``;

const StyledIcon = styled.i`
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #aaaaaa;
  }
`;

const StyledSettingBox = styled.form`
  position: absolute;
  background: #ffffff;
  padding: 2rem 3rem;
  border: none;
  border-radius: 15px;
  top: 6rem;
  right: -25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 30rem;

  @media screen and (max-width: 640px) {
    top: 6rem;
    right: 0;
  }
`;

const StyledFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledImgInSetting = styled.img`
  width: 6rem;
  border-radius: 50%;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 300;
  color: #707070 !important;
`;

const StyledNavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */

  @media screen and (max-width: 640px) {
    flex-direction: row;
    justify-content: space-around;
  }
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

const StyledInputSetting = styled.input`
  padding: 0.5rem 1.5rem;
  color: black;
  width: 80%;
  border-radius: 10px;
  background: #dbdbdb;
  border: none;
`;

const StyledButtonSubmitSetting = styled.button`
  background: #616161;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #414141;
  }
`;

function Sidebar() {
  const [username, setUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      return JSON.parse(storedUsername);
    }
  });
  const [inputUsername, setInputUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      return JSON.parse(storedUsername);
    }
  });

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  function handlerChange(e) {
    setInputUsername(e.target.value);
  }

  function handleSetting(e) {
    e.preventDefault();

    setUsername(inputUsername);
    setToggle(!toggle);

    localStorage.setItem("username", JSON.stringify(inputUsername));
  }

  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledImg src="profile.webp" alt="profile" />
        <StyledNameBox>
          <StyledText>{username}</StyledText>
          <StyledIcon
            data-testid="editUser"
            className="fa-solid fa-gear"
            onClick={handleToggle}
          ></StyledIcon>
          {toggle && (
            <StyledSettingBox onSubmit={handleSetting}>
              <StyledFlexRow>
                <StyledImgInSetting
                  src="profile.webp"
                  alt="profile in setting"
                />
                <div>
                  <StyledLabel htmlFor="username">Username</StyledLabel>
                  <StyledInputSetting
                    type="text"
                    name="username"
                    value={inputUsername}
                    onChange={handlerChange}
                  />
                </div>
              </StyledFlexRow>
              <StyledButtonSubmitSetting>Edit</StyledButtonSubmitSetting>
            </StyledSettingBox>
          )}
        </StyledNameBox>
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
