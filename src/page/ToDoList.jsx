import styled from "styled-components";
import TitleHome from "../component/TitleHome";
import EditAndDelete from "../component/EditAndDelete";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;

const StyledEventsContainer = styled.div`
  padding: 2rem;
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

const StyledTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledTitle = styled.h1`
  font-weight: 500;
`;

const StyledBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: auto;
`;

const StyledLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledDate = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
`;

const StyledCompleted = styled.p`
  background: #43a047;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
`;
const StyledInompleted = styled.p`
  background: #ff5722;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
`;

function ToDoList({ events, setEvents }) {
  function handleDelete(id) {
    setEvents(events.filter((event) => event.id !== id));
  }

  function handleCompleted(id) {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
    localStorage.setItem("events", JSON.stringify(events));
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
          <StyledEventsContainer key={event.id}>
            <StyledEventBox>
              <StyledTitleAndDescription>
                <StyledTitle>{event.title}</StyledTitle>
                <p>{event.description}</p>
              </StyledTitleAndDescription>
              <StyledBottomBox>
                <StyledLeftBox>
                  <StyledDate>{event.date}</StyledDate>
                  {event.completed ? (
                    <StyledCompleted onClick={() => handleCompleted(event.id)}>
                      Complete
                    </StyledCompleted>
                  ) : (
                    <StyledInompleted onClick={() => handleCompleted(event.id)}>
                      Incompleted
                    </StyledInompleted>
                  )}
                </StyledLeftBox>
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
          </StyledEventsContainer>
        ))}
      </StyledContainer>
    </>
  );
}

export default ToDoList;
