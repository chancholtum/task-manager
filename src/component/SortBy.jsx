import { useState } from "react";
import styled from "styled-components";

const DropDown = styled.ul`
  position: relative;
  list-style: none;
`;

const DropDownMenu = styled.li`
  padding: 5px 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background: #424242;
    color: #fff;
  }
`;

const SelectContainerDropDown = styled.div`
  width: 110px;
  border-radius: 10px;
  background: #1a1919;
  padding: 10px 6px;
  top: calc(100% + 5px);
  position: absolute;
  z-index: 100;
`;

const SelectContainerDefault = styled.div`
  width: 150px;
  padding: 1.7rem 1.5rem;
  border-radius: 100px;
  background: #1a1919;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 29px;
  cursor: pointer;

  &:focus {
    & + ${SelectContainerDropDown} {
      display: block;
      z-index: 100;
    }
  }
`;

const SelectText = styled.p`
  font-weight: 400;
`;

const ArrowImg = styled.i`
  width: 1.6rem;
  height: 1.6rem;
  color: #fff;
`;

function SortBy({ sortFn, sortBy, setSortBy }) {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function clickSort(e) {
    setSortBy(e.target.textContent);
    setIsToggle(!isToggle);
  }

  return (
    <DropDown>
      <SelectContainerDefault onClick={handleToggle}>
        <SelectText>{sortBy}</SelectText>
        <ArrowImg className="fa-solid fa-arrow-down"></ArrowImg>
      </SelectContainerDefault>
      {isToggle && (
        <SelectContainerDropDown>
          <DropDownMenu onClick={clickSort}>All</DropDownMenu>
          <DropDownMenu onClick={clickSort}>Completed</DropDownMenu>
          <DropDownMenu onClick={clickSort}>Incompleted</DropDownMenu>
        </SelectContainerDropDown>
      )}
    </DropDown>
  );
}

export default SortBy;
