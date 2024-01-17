import { useState } from "react";
import styled from "styled-components";

const StyledSearchBox = styled.input`
  padding: 0.5rem 2rem;
  border-radius: 100px;
  background: #1a1919;
  border: none;
  width: 35%;
  text-align: center;
  transition: all 0.3s ease;

  &:focus {
    width: 40%;
  }
`;

function SearchEvent({ searchEvent, setSearchEvent }) {
  return (
    <>
      <StyledSearchBox
        type="text"
        name="search"
        placeholder="Search task"
        value={searchEvent}
        onChange={(e) => setSearchEvent(e.target.value)}
      />
    </>
  );
}

export default SearchEvent;
