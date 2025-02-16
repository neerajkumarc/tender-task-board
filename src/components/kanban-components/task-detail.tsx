import React, { useState } from 'react';
import { Task } from "@/types/kanban";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar,
  Flag,
  User,
  Clock,
  Send,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Comment {
  id: string;
  user: string;
  userInitial: string;
  content: string;
  timestamp: Date;
}

interface TaskDetailProps {
  task: Task;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, open, onOpenChange }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      user: "Sarah Connor",
      userInitial: "S",
      content: "Initial design looks good. Let's proceed with the implementation.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      user: "John Doe",
      userInitial: "J",
      content: "I've started working on the backend integration.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
  ]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: "Current User",
        userInitial: "C",
        content: newComment.trim(),
        timestamp: new Date(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-900 text-white max-w-5xl p-0 gap-0">
        <div className="flex h-[80vh]">
          {/* Left side - Task Details */}
          <div className="flex-1 border-r border-neutral-800">
            <div className="p-6">
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

              <ScrollArea className="h-[calc(80vh-120px)] pr-6">
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
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Right side - Comments */}
          <div className="w-[400px] flex flex-col">
            <div className="p-4 border-b border-neutral-800">
              <h2 className="text-lg font-medium">Comments</h2>
              <p className="text-sm text-gray-400">{comments.length} comments</p>
            </div>

            {/* Comments List */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-blue-500">
                        {comment.userInitial}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{comment.user}</span>
                        <span className="text-xs text-gray-400">
                          {formatTimestamp(comment.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Comment Input */}
            <div className="p-4 border-t border-neutral-800">
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-500">C</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="min-h-[80px] bg-neutral-800 border-neutral-700 resize-none"
                  />
                  <div className="flex justify-end">
                    <Button
                      onClick={handleAddComment}
                      disabled={!newComment.trim()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetail;