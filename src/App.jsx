import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ToDoList from "./page/ToDoList";
import Diary from "./page/Diary";
import AppLayout from "./component/AppLayout";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "event 1", id: "1" },
    { title: "event 2", id: "2" },
    { title: "event 3", id: "3" },
    { title: "event 4", id: "4" },
    { title: "event 5", id: "5" },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route
            path="home"
            element={<Home events={events} setEvents={setEvents} />}
          />
          <Route
            path="todolist"
            element={<ToDoList events={events} setEvents={setEvents} />}
          />
          <Route path="diary" element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
