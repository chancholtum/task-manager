import { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import styled from "styled-components";

const StyledModalContainer = styled.div`
  border-radius: 5px;
  background: #212121;
  padding: 2rem 3rem;
`;

const StyledForms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledHead = styled.h1`
  font-weight: 500;
  margin-bottom: 3rem;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  background-color: #1a1919;
  padding: 1rem;
  border: none;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  background-color: #1a1919;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  height: 20rem;
  resize: none;
`;

const StyledToggleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #547dcb;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #466db8;
  }
`;

function EditTask({ modal, toggle, events, setEvents, event, i }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("test");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTaskTitle(event?.title);
    setDescription(event?.description);
    setDate(event?.date);
    setCompleted(event?.completed);
  }, []);

  function handleEdit(e) {
    e.preventDefault();

    let taskObj = {
      title: taskTitle,
      description: description,
      date: date,
      completed: completed,
      id: crypto.randomUUID(),
    };

    let tempEvents = [...events];
    tempEvents[i] = taskObj;
    localStorage.setItem("events", JSON.stringify(tempEvents));
    setEvents(tempEvents);

    toggle();
  }

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      centered={true}
      style={{ borderRadius: "10px" }}
    >
      <StyledModalContainer>
        <StyledHead>Edit a Task</StyledHead>
        <StyledForms onSubmit={handleEdit}>
          <StyledForm>
            <label htmlFor="title">Title</label>
            <StyledInput
              type="text"
              name="title"
              id="title"
              placeholder="Your Task"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </StyledForm>
          <StyledForm>
            <label htmlFor="description">Description</label>
            <StyledTextArea
              type="text"
              name="description"
              placeholder="Description your task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </StyledForm>
          <StyledForm>
            <label htmlFor="date">Date</label>
            <StyledInput
              type="date"
              name="date"
              placeholder="Description your task"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </StyledForm>
          <StyledToggleBox>
            <label htmlFor="completed">Toggle Completed</label>
            <input
              type="checkbox"
              name="completed"
              placeholder="Description your task"
              value={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </StyledToggleBox>
          <StyledButton>
            <i className="fa-solid fa-pen-to-square"></i>Edit Task
          </StyledButton>
        </StyledForms>
      </StyledModalContainer>
    </Modal>
  );
}

export default EditTask;
