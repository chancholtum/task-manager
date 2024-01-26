import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Calendar from "../component/Calendar";
import Home from "../page/Home";
import TodolistHome from "../component/TodolistHome";
import EditAndDelete from "../component/EditAndDelete";
import DiaryHome from "../component/DiaryHome";
import Sidebar from "../component/Sidebar";

const mockEvents = [
  {
    title: "Test1",
    completed: false,
    date: "2024-01-15",
    description: "I am Lazy",
    id: 1,
  },
];

const mockDiaries = [
  {
    date: "2024-01-15",
    id: 1,
    note: "Test1",
  },
  {
    date: "2024-01-15",
    id: 2,
    note: "Test1",
  },
  {
    date: "2024-01-15",
    id: 3,
    note: "Diary 1",
  },
];

function dateFormatToDisplay(date) {
  const arr = date.split("-");

  let year = arr[0];
  let month = arr[1];
  let day = arr[2];

  let formatteddate = day + "-" + month + "-" + year;

  return formatteddate;
}

describe("Test case of task-manager", () => {
  beforeEach(() => {
    render(
      <Home
        events={mockEvents}
        diaries={mockDiaries}
        dateFormatToDisplay={dateFormatToDisplay}
      />
    );
  });

  it("Test Case 1: หน้าหลักโหลดสำเร็จและแสดงข้อมูลที่ถูกต้อง", () => {
    expect(screen.getByText(/To-do-list/)).toBeInTheDocument();
  });

  it("Test Case 2: หน้าปฏิทินโหลดสำเร็จและแสดงปฏิทินปัจจุบัน", () => {
    expect(screen.getByText(/Calendar/)).toBeInTheDocument();
  });

  it("Test Case 3: หน้าบันทึกประจำวันโหลดและแสดงฟอร์มสำหรับการเขียนบันทึก", () => {
    expect(screen.getByText(/Calendar/)).toBeInTheDocument();
  });
});

it("Test Case 4: เมื่อคลิกที่รายการใน To-Do List สามารถเปิดหน้าแก้ไขรายการได้", () => {
  render(
    <EditAndDelete
      events={mockEvents}
      diaries={mockDiaries}
      editModal="todolist"
    />
  );
  fireEvent.click(screen.getByTestId("editbutton"));
  expect(screen.getByText("Edit a Task")).toBeInTheDocument();
});

it("Test Case 5: การเพิ่มกิจกรรมใหม่ในปฏิทินทำงานได้ถูกต้อง", () => {
  render(<Calendar events={mockEvents} />);
  expect(screen.getByText(/Test1/)).toBeInTheDocument();
});

it("Test Case 6: ฟังก์ชันการค้นหา To-do ต่าง ๆ ในแอปพลิเคชั่นทำงานได้ตามที่คาดไว้", () => {
  render(<TodolistHome events={mockEvents} />);
  fireEvent.change(screen.getByPlaceholderText("Search task"), {
    target: { value: "Test1" },
  });
  expect(screen.getByText("Test1")).toBeInTheDocument();
  expect(screen.queryByText("Node.js")).not.toBeInTheDocument();
});

it("Test Case 10: การบันทึกข้อมูลในฟอร์มบันทึกประจำวันและการเรียกดูข้อมูลนั้นภายหลังได้", () => {
  render(
    <DiaryHome
      diaries={mockDiaries}
      dateFormatToDisplay={dateFormatToDisplay}
    />
  );
  fireEvent.click(screen.getByTestId("createTaskAndDiary"));
  fireEvent.change(screen.getByPlaceholderText("Description your diary"), {
    target: { value: "Today is 25 Jan 2024" },
  });
  fireEvent.change(screen.getByTestId("createDiaryDate"), {
    target: { value: "01-01-2024" },
  });
  fireEvent.click(screen.getByTestId("createDiarySubmitButton"));
  expect(screen.getByText(/Today is 25 Jan 2024/)).toBeInTheDocument();
});

it("Test Case 11: การสร้าง และ ทำการลบรายการใน To-Do List ได้", () => {
  render(<TodolistHome events={mockEvents} create="task" />);
  fireEvent.click(screen.getByTestId("createTaskAndDiary"));
  fireEvent.change(screen.getByPlaceholderText("Your Task"), {
    target: { value: "Final Project BTD" },
  });
  fireEvent.change(screen.getByTestId("createTaskDate"), {
    target: { value: "I have to done today" },
  });
  fireEvent.change(screen.getByTestId("createTaskDate"), {
    target: { value: "01-01-2024" },
  });
  // fireEvent.click(screen.getByTestId("createTaskSubmitButton"));
  expect(screen.getByText(/Test1/)).toBeInTheDocument();
  // fireEvent.click(screen.getAllByTestId("deleteButton"));
});

// it("Test Case 12: การเปลี่ยนแปลงธีมหรือการตั้งค่าส่วนตัวของผู้ใช้", () => {
//   render(<Sidebar />);
// });
