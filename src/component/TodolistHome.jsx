import styled from "styled-components";
import TitleHome from "./TitleHome";
import EditAndDelete from "./EditAndDelete";
import { useEffect } from "react";
import { Draggable } from "@fullcalendar/interaction";

const StyledListContainer = styled.ul`
  list-style: none;
  overflow: auto;
`;

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitleBox = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

function TodolistHome({ events, setEvents }) {
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

  return (
    <>
      <TitleHome title="To-do-list" />
      <StyledListContainer id="draggable-el">
        {events.map((event) => (
          <StyledList title={event.title} key={event.id}>
            <StyledTitleBox>
              <input type="checkbox" />
              <label className="fc-event" title={event.title}>
                {event.title}
              </label>
            </StyledTitleBox>
            <EditAndDelete />
          </StyledList>
        ))}
      </StyledListContainer>
    </>
  );
}

export default TodolistHome;
