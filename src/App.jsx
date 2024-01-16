import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ToDoList from "./page/ToDoList";
import Diary from "./page/Diary";
import AppLayout from "./component/AppLayout";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <BrowserRouter>
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
              />
            }
          />
          <Route
            path="todolist"
            element={<ToDoList events={events} setEvents={setEvents} />}
          />
          <Route
            path="diary"
            element={<Diary />}
            diaries={diaries}
            setDiaries={setDiaries}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
