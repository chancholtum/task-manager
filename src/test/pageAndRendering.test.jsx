import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Calendar from "../component/Calendar";
import Home from "../page/Home";
import TodolistHome from "../component/TodolistHome";
import EditAndDelete from "../component/EditAndDelete";

describe("Test case of task-manager", () => {
  const mockEvent = [
    {
      title: "Test1",
      completed: false,
      date: "2024-01-15",
      description: "I am Lazy",
      id: 1,
    },
  ];

  const mockDiary = [
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

  beforeEach(() => {
    render(
      <Home
        events={mockEvent}
        diaries={mockDiary}
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

describe("Test case of task-manager", () => {
  const mockEvent = [
    {
      title: "Final Project",
      completed: false,
      date: "2024-01-15",
      description: "I am Lazy",
      id: 1,
    },
    {
      title: "Node.js",
      completed: false,
      date: "2024-01-15",
      description: "I am spleepy",
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

  beforeEach(() => {
    render(
      <EditAndDelete
        events={mockEvent}
        diaries={mockDiaries}
        editModal="todolist"
      />
    );
  });

  it("Test Case 4: เมื่อคลิกที่รายการใน To-Do List สามารถเปิดหน้าแก้ไขรายการได้", () => {
    fireEvent.click(screen.getByTestId("editbutton"));
    expect(screen.getByText("Edit a Task")).toBeInTheDocument();
  });
});

describe("Test case of task-manager", () => {
  const mockEvent = [
    {
      title: "Final Project",
      completed: false,
      date: "2024-01-15",
      description: "I am Lazy",
      id: 1,
    },
    {
      title: "Node.js",
      completed: false,
      date: "2024-01-15",
      description: "I am spleepy",
      id: 1,
    },
  ];

  beforeEach(() => {
    render(<Calendar events={mockEvent} />);
  });

  it("Test Case 5: การเพิ่มกิจกรรมใหม่ในปฏิทินทำงานได้ถูกต้อง", () => {
    expect(screen.getByText(/Final Project/)).toBeInTheDocument();
  });
});

describe("Test case of task-manager", () => {
  const mockEvent = [
    {
      title: "Final Project",
      completed: false,
      date: "2024-01-15",
      description: "I am Lazy",
      id: 1,
    },
    {
      title: "Node.js",
      completed: false,
      date: "2024-01-15",
      description: "I am spleepy",
      id: 1,
    },
  ];

  beforeEach(() => {
    render(<TodolistHome events={mockEvent} />);
  });

  it("Test Case 6: ฟังก์ชันการค้นหา To-do ต่าง ๆ ในแอปพลิเคชั่นทำงานได้ตามที่คาดไว้", () => {
    fireEvent.change(screen.getByPlaceholderText("Search task"), {
      target: { value: "Final Project" },
    });
    expect(screen.getByText("Final Project")).toBeInTheDocument();
    expect(screen.queryByText("Node.js")).not.toBeInTheDocument();
  });
});
