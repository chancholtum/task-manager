import styled from "styled-components";
import TitleHome from "./TitleHome";
import EditAndDelete from "./EditAndDelete";
import { useEffect, useState } from "react";
import { Draggable } from "@fullcalendar/interaction";
import SearchEvent from "./SearchEvent";
import SortBy from "./SortBy";

const StyledSearchAndSortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledListContainer = styled.ul`
  list-style: none;
  overflow: auto;
  margin-top: 2rem;
`;

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const StyledTitleBox = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

const StyledInput = styled.input`
  cursor: pointer;
`;

const StyledText = styled.p`
  ${(props) =>
    props.as === "true" &&
    `text-decoration: line-through; 
  color:#a1a1a1`};

  ${(props) => props.as === "false" && `color:#fff`};
`;

function TodolistHome({ events, setEvents }) {
  const [searchEvent, setSearchEvent] = useState("");
  const [sortBy, setSortBy] = useState("All");

  useEffect(() => {
    let draggableEl = document.getElementById("draggable-el");

    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  let sortEvents = events.slice().sort((a, b) => +a.completed - +b.completed);

  const search =
    searchEvent.length > 0
      ? sortEvents.filter((event) =>
          `${event.title}`.toLowerCase().includes(searchEvent.toLowerCase())
        )
      : sortEvents;

  const sortCompleted = search.filter((event) => event.completed === true);
  const sortIncompleted = search.filter((event) => event.completed === false);

  let sorted;

  function sortFn() {
    if (sortBy === "All") sorted = search;
    if (sortBy === "Completed") sorted = sortCompleted;
    if (sortBy === "Incompleted") sorted = sortIncompleted;
  }
  sortFn();

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
      <StyledSearchAndSortBox>
        <SearchEvent
          searchEvent={searchEvent}
          setSearchEvent={setSearchEvent}
        />
        <SortBy sortFn={sortFn} setSortBy={setSortBy} />
      </StyledSearchAndSortBox>
      <StyledListContainer id="draggable-el">
        {sorted.map((event, i) => (
          <StyledList title={event.title} key={event.id}>
            <StyledTitleBox>
              <StyledInput
                type="checkbox"
                name="completed"
                checked={event.completed}
                onChange={() => handleCompleted(event.id)}
              />
              <StyledText
                onClick={() => handleCompleted(event.id)}
                as={String(event.completed)}
              >
                {event.title}
              </StyledText>
            </StyledTitleBox>
            <EditAndDelete
              events={events}
              setEvents={setEvents}
              id={event.id}
              event={event}
              children={handleDelete}
              editModal="todolist"
              i={i}
            />
          </StyledList>
        ))}
      </StyledListContainer>
    </>
  );
}

export default TodolistHome;
