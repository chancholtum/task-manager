import TitleHome from "./TitleHome";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

function Calendar() {
  return (
    <div>
      <TitleHome title="Calendar" />
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineWook, dayGridMonth,timeGridWeek",
          }}
          events={{}}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          // dateClick={{}}
          // drop={{}}
          // eventClick={}
        />
      </div>
    </div>
  );
}

export default Calendar;
