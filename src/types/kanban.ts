export interface Task {
  id: string;
  title: string;
  description: string;
  status: "Not Started" | "In Progress" | "Completed" | "Todo List";
  assignee: string;
  dueDate: string;
  priority: "High" | "Low";
  comments: number;
  attachments: number;
}
export interface BoardData {
  todo: Task[];
  inProgress: Task[];
  notStarted: Task[];
  completed: Task[];
}

export type ColumnId = keyof BoardData;
