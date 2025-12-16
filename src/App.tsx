import React, { useState } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Finish Lab 3",
      description: "Implement TaskList, TaskItem, TaskFilter",
      status: "pending",
      priority: "high",
      dueDate: "2025-01-20",
    },
    {
      id: "2",
      title: "Review TypeScript",
      description: "Study interfaces and generics",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-01-22",
    },
  ]);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
