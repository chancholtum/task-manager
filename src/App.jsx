import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ToDoList from "./page/ToDoList";
import Diary from "./page/Diary";
import AppLayout from "./component/AppLayout";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar";

function App() {
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");

    if (storedEvents) {
      return JSON.parse(storedEvents);
    } else {
      return [];
    }
  });

  // const [diaries, setDiaries] = useState([]);
  const [diaries, setDiaries] = useState(() => {
    const storedDiaries = localStorage.getItem("diaries");

    if (storedDiaries) {
      return JSON.parse(storedDiaries);
    } else {
      return [];
    }
  });

  function dateFormatToDisplay(date) {
    const arr = date.split("-");

    let year = arr[0];
    let month = arr[1];
    let day = arr[2];

    let formatteddate = day + "-" + month + "-" + year;

    return formatteddate;
  }

  function dateFormatToEdit(date) {
    const arr = date.split("-");

    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    let formatteddate = year + "-" + month + "-" + day;

    return formatteddate;
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route
          path="home"
          element={
            <Home
              events={events}
              setEvents={setEvents}
              diaries={diaries}
              setDiaries={setDiaries}
              dateFormatToDisplay={dateFormatToDisplay}
            />
          }
        />
        <Route
          path="todolist"
          element={
            <ToDoList
              events={events}
              setEvents={setEvents}
              dateFormatToDisplay={dateFormatToDisplay}
            />
          }
        />
        <Route
          path="diary"
          element={
            <Diary
              diaries={diaries}
              setDiaries={setDiaries}
              dateFormatToDisplay={dateFormatToDisplay}
            />
          }
        />
        <Route path="sidebar" element={<Sidebar />} />
      </Route>
    </Routes>
  );
}

export default App;
