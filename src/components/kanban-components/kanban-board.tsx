"use client";
import React, { DragEvent, useEffect, useState } from "react";
import { KanbanColumn } from "./kanban-columns";
import { Task } from "@/types/kanban";
import { fetchBoardData } from "@/lib/utils";

interface BoardData {
  todo: Task[];
  inProgress: Task[];
  notStarted: Task[];
  completed: Task[];
}

type ColumnId = keyof BoardData;


export const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<BoardData | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBoardData().then((data: any) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);
  const handleDrop = (column: ColumnId) => (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData("text/plain")) as Task;

    if (!tasks) return;

    const sourceColumn = Object.keys(tasks).find((col) =>
      tasks[col as ColumnId].some((t) => t.id === task.id)
    ) as ColumnId;

    if (sourceColumn === column) return;

    setTasks((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [sourceColumn]: prev[sourceColumn].filter((t) => t.id !== task.id),
        [column]: [
          ...prev[column],
          {
            ...task,
            status: column === "completed" ? "Completed" : column === "inProgress" ? "In Progress" : "Not Started",
          },
        ],
      };
    });
  };

  return (
    <div className="flex gap-4">
      <div className="p-4 bg-black rounded-lg transition-colors duration-200 border border-transparent hover:border-neutral-700/50">
        <KanbanColumn title="Todo List" tasks={tasks?.todo || []} onDrop={handleDrop("todo")} loading={loading} />
      </div>
      <div className="p-4 bg-black rounded-lg transition-colors duration-200 border border-transparent hover:border-neutral-700/50">
        <KanbanColumn title="Not Started" tasks={tasks?.notStarted || []} onDrop={handleDrop("notStarted")}  loading={loading} />
      </div>
      <div className="p-4 bg-black rounded-lg transition-colors duration-200 border border-transparent hover:border-neutral-700/50">
        <KanbanColumn title="In Progress" tasks={tasks?.inProgress || []} onDrop={handleDrop("inProgress")}  loading={loading} />
      </div>
      <div className="p-4 bg-black rounded-lg transition-colors duration-200 border border-transparent hover:border-neutral-700/50">
        <KanbanColumn title="Completed" tasks={tasks?.completed || []} onDrop={handleDrop("completed")}  loading={loading} />
      </div>
    </div>
  );
};
