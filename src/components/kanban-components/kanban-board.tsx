import React from "react";
import { KanbanColumn } from "./kanban-columns";
import { Task } from "@/types/kanban";

const mockTasks: Task[] = [
    {
        "id": "1",
        "title": "Foundation Construction for Residential Project A",
        "description": "Tender for the foundation construction of a two-story residential building located at 123 Maple Street.",
        "status": "Not Started",
        "assignee": "John Doe",
        "dueDate": "2024-12-22",
        "priority": "High",
        "comments": 5,
        "attachments": 2
    },
    {
        "id": "2",
        "title": "Roof Installation for Commercial Project B",
        "description": "Invitation to tender for the roof installation for the new office building at 456 Oak Avenue.",
        "status": "Todo List",
        "assignee": "John Doe",
        "dueDate": "2024-12-22",
        "priority": "High",
        "comments": 3,
        "attachments": 1
    },
    {
        "id": "3",
        "title": "Interior Finishing for Apartment Complex C",
        "description": "Completed tender for interior finishing work on a 50-unit apartment complex at 789 Pine Court.",
        "status": "Completed",
        "assignee": "John Doe",
        "dueDate": "2024-12-22",
        "priority": "High",
        "comments": 0,
        "attachments": 0
    },
    {
        "id": "4",
        "title": "Site Preparation for Industrial Project D",
        "description": "Tender for site preparation works for the upcoming industrial park at 321 Birch Boulevard.",
        "status": "Not Started",
        "assignee": "John Doe",
        "dueDate": "2024-12-22",
        "priority": "High",
        "comments": 2,
        "attachments": 0
    },
    {
        "id": "5",
        "title": "Landscaping for Community Park E",
        "description": "Request for proposals for landscaping works in the new community park located at 654 Spruce Road.",
        "status": "Not Started",
        "assignee": "John Doe",
        "dueDate": "2024-12-22",
        "priority": "High",
        "comments": 1,
        "attachments": 0
    }
];

export const KanbanBoard: React.FC = () => {
  const todoList = mockTasks.filter((task) => task.status === "Todo List");
  const notStarted = mockTasks.filter((task) => task.status === "Not Started");
  const inProgress = mockTasks.filter((task) => task.status === "In Progress");
  const completed = mockTasks.filter((task) => task.status === "Completed");

  return (
    <div className="flex gap-4 min-h-screen">
      <div className="p-4 bg-black rounded-lg">
        <KanbanColumn title="Todo List" tasks={todoList} />
      </div>
      <div className="p-4 bg-black rounded-lg">
        <KanbanColumn title="Not Started" tasks={notStarted} />
      </div>
      <div className="p-4 bg-black rounded-lg">
        <KanbanColumn title="In Progress" tasks={inProgress} />
      </div>
      <div className="p-4 bg-black rounded-lg">
        <KanbanColumn title="Completed" tasks={completed} />
      </div>
    </div>
  );
};
