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

function CreateTask({ modal, toggle, events, setEvents }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  function handleSubmit(e) {
    e.preventDefault();

    if (taskTitle !== "") {
      setEvents([
        ...events,
        {
          title: taskTitle,
          description: description,
          date: date,
          completed: completed,
          id: crypto.randomUUID(),
        },
      ]);
    }

    setTaskTitle("");
    setDescription("");
    setDate("");
    setCompleted(false);
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
        <StyledHead>Create a Task</StyledHead>
        <StyledForms onSubmit={handleSubmit}>
          <StyledForm>
            <label htmlFor="title">Title</label>
            <StyledInput
              type="text"
              name="title"
              placeholder="Your Task"
              value={taskTitle}
              required
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
            <i className="fa-solid fa-plus"></i>Create Task
          </StyledButton>
        </StyledForms>
      </StyledModalContainer>
    </Modal>
  );
}

export default CreateTask;
