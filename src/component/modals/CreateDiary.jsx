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
  /* margin-bottom: 3rem; */
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

function CreateDiary({ modal, toggle, diaries, setDiaries }) {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  function handleSubmit(e) {
    e.preventDefault();

    if (note !== "") {
      setDiaries([
        ...diaries,
        {
          note: note,
          date: date,
          id: crypto.randomUUID(),
        },
      ]);
    }

    setNote("");
    setDate("");

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
        <StyledForms onSubmit={handleSubmit}>
          <StyledHead>Create a Diary</StyledHead>

          <StyledForm>
            <label htmlFor="note">Diary</label>
            <StyledTextArea
              type="text"
              name="note"
              placeholder="Description your diary"
              value={note}
              required
              onChange={(e) => setNote(e.target.value)}
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

          <StyledButton>
            <i className="fa-solid fa-plus"></i>Create Diary
          </StyledButton>
        </StyledForms>
      </StyledModalContainer>
    </Modal>
  );
}

export default CreateDiary;
