import TitleHome from "./TitleHome";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const StyledCalendarContainer = styled.div`
  width: 60rem;
  max-width: 60rem;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`;

function Calendar() {
  const [allEvents, setAllEvents] = useState([]);
  const [showmodel, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  function handleDateClick(arg) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowDeleteModal(true);
  }

  function addEvent(data) {
    console.log("data", data);

    const event = {
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };

    setAllEvents([...allEvents, event]);
  }

  function handleDateModal(data) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  return (
    <>
      <StyledTitle>Calendar</StyledTitle>
      <StyledCalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineWook, dayGridMonth,timeGridWeek",
          }}
          events={allEvents}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          dateClick={handleDateClick}
          drop={(data) => addEvent(data)}
          // eventClick={(data) => handleDeleteModal(data)}
        />
      </StyledCalendarContainer>
    </>
  );
}

export default Calendar;
