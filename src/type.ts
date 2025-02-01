export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "All" | "Low" | "Medium" | "High";
  assignedTo: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
