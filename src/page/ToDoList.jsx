import styled from "styled-components";
import TitleHome from "../component/TitleHome";
import EditAndDelete from "../component/EditAndDelete";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;

const StyledTodolistContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 0.1px solid #616161;
`;

const StyledEventBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  height: 100%;
`;

const StyledBottomBox = styled.div`
  margin-top: auto;
`;

function ToDoList({ events, setEvents }) {
  function handleDelete(id) {
    setEvents(events.filter((event) => event.id !== id));
  }

  return (
    <>
      <TitleHome
        title="To-do-list"
        create="task"
        events={events}
        setEvents={setEvents}
      />
      <StyledContainer>
        {events.map((event, i) => (
          <StyledTodolistContainer key={event.id}>
            <StyledEventBox>
              <div>
                <p>{event.title}</p>
                <p>{event.description}</p>
              </div>
              <StyledBottomBox>
                <div>
                  <p>{event.date}</p>
                  {event.completed ? <p>Complete</p> : <p>Incompleted</p>}
                </div>
                <EditAndDelete
                  events={events}
                  setEvents={setEvents}
                  id={event.id}
                  event={event}
                  children={handleDelete}
                  editModal="todolist"
                  i={i}
                />
              </StyledBottomBox>
            </StyledEventBox>
          </StyledTodolistContainer>
        ))}
      </StyledContainer>
    </>
  );
}

export default ToDoList;
