export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'Not Started' | 'In Progress' | 'Completed' | 'Todo List';
    assignee: string;
    dueDate: string;
    priority: 'High' | 'Low';
    comments: number;
    attachments: number;
  }