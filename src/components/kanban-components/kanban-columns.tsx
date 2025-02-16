import React from "react";
import { Task } from "@/types/kanban";
import TaskCard from "./task-card";
import { MoreHorizontal, Plus } from "lucide-react";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, tasks }) => {
  return (
    <div className="flex-1 min-w-[300px] mx-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              title === "In Progress"
                ? "bg-blue-400"
                : title === "Not Started"
                ? "bg-orange-400"
                : title === "Completed"
                ? "bg-green-400"
                : "bg-yellow-400"
            }`}
          />
          <h2 className="text-white font-medium">{title}</h2>
          <span className="bg-blue-500/50 text-gray-300 text-sm w-5 h-5 flex items-center justify-center rounded-full">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-300">
            <Plus className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-300">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
