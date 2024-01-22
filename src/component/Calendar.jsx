import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";

const StyledCalendarContainer = styled.div`
  width: 100%;
  height: 90%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`;

function Calendar({ events }) {
  const styledEvents = events.map((event) => ({
    ...event,
    className: event.completed ? "completed" : "incomplete",
  }));
  return (
    <>
      <StyledTitle>Calendar</StyledTitle>
      <StyledCalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          // headerToolbar={{
          //   left: "prev,next today",
          //   center: "title",
          //   right: "resourceTimelineWook, dayGridMonth,timeGridWeek",
          // }}
          initialView="dayGridMonth"
          events={styledEvents}
        />
      </StyledCalendarContainer>
    </>
  );
}

export default Calendar;
