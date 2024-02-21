import styled from "styled-components";
import EditTask from "./modals/editTask";
import { useEffect, useState } from "react";
import EditDiary from "./modals/EditDiary";

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

function EditAndDelete({
  events,
  setEvents,
  id,
  event,
  children,
  diary,
  diaries,
  setDiaries,
  editModal,
  i,
}) {
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function handleDelete() {
    children(id);
  }

  return (
    <>
      <StyledButtonBox>
        <button onClick={toggle} data-testid="editbutton">
          <StyledIcon className="fa-solid fa-pen-to-square"></StyledIcon>
        </button>
        <button onClick={handleDelete} data-testid="deleteButton">
          <StyledIcon className="fa-solid fa-trash"></StyledIcon>
        </button>
      </StyledButtonBox>

      {editModal === "todolist" ? (
        <EditTask
          toggle={toggle}
          modal={modal}
          events={events}
          setEvents={setEvents}
          event={event}
          i={i}
          id={id}
        />
      ) : (
        <EditDiary
          toggle={toggle}
          modal={modal}
          diaries={diaries}
          setDiaries={setDiaries}
          diary={diary}
          i={i}
        />
      )}
    </>
  );
}

export default EditAndDelete;
