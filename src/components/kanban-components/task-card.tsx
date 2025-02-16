import { Task } from "@/types/kanban";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, MoreHorizontal, Paperclip } from "lucide-react";

interface TaskCardProps {
  task: Task;
}
const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <div className="bg-neutral-900 rounded-lg p-4 mb-3">
    <div className="flex justify-between items-start mb-1">
      <div
        className={`flex items-center gap-2 px-2 rounded-full ${
          task.status === "In Progress"
            ? "bg-blue-400/50"
            : task.status === "Not Started"
            ? "bg-orange-400/50"
            : task.status === "Completed"
            ? "bg-green-400/50"
            : "bg-yellow-400/50"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            task.status === "In Progress"
              ? "bg-blue-400"
              : task.status === "Not Started"
              ? "bg-orange-400"
              : task.status === "Completed"
              ? "bg-green-400"
              : "bg-yellow-400"
          }`}
        />
        <span className="text-whitetext-sm">{task.status}</span>
      </div>
      <button className="text-gray-400 hover:text-gray-300">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>

    <h3 className="text-white font-medium mb-1">{task.title}</h3>
    <p className="text-gray-400 text-sm mb-3">{task.description}</p>

    <div className="space-y-4">
      <div className="flex items-center  justify-between gap-2">
        <p className="text-sm">Assignee</p>
        <div className="text-xs bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white border border-white">
          S
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{task.dueDate}</p>
        <p
          className={`px-2 py-0.5 rounded text-xs ${
            task.priority === "High"
              ? "bg-red-900 text-red-300"
              : "bg-green-900 text-green-300"
          }`}
        >
          {task.priority}
        </p>
      </div>
      <Separator className="bg-neutral-800" />
      <div className="flex items-center gap-3 text-gray-400">
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm">{task.comments || 0} Comments</span>
        </div>
        <div className="flex items-center gap-1">
          <Paperclip className="w-4 h-4" />
          <span className="text-sm">{task.attachments || 0} Attachments</span>
        </div>{" "}
      </div>
    </div>
  </div>
);

export default TaskCard;
