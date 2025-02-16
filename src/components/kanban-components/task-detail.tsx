import React from 'react';
import { Task } from "@/types/kanban";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MessageSquare,
  Paperclip,
  Calendar,
  Flag,
  User,
  Clock,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TaskDetailProps {
  task: Task;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-900 text-white max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
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
            <span className="text-sm text-gray-400">{task.status}</span>
          </div>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Created by Sarah Connor on {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Description</h3>
              <p className="text-sm text-gray-400">{task.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  <span>Assignee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white border border-white">
                    S
                  </div>
                  <span className="text-sm">Sarah Connor</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Due Date</span>
                </div>
                <span className="text-sm">{task.dueDate}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Flag className="w-4 h-4" />
                  <span>Priority</span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-xs inline-block ${
                    task.priority === "High"
                      ? "bg-red-900 text-red-300"
                      : "bg-green-900 text-green-300"
                  }`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Status</span>
                </div>
                <span className="text-sm">{task.status}</span>
              </div>
            </div>

            <Separator className="bg-neutral-800" />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Activity</h3>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{task.comments || 0} Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Paperclip className="w-4 h-4" />
                  <span className="text-sm">{task.attachments || 0} Attachments</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetail;