import React from "react";
import type { TaskItemProps } from "../../types";

/**
 * TaskItem
 * - Displays a single task
 * - Shows priority color
 * - Allows status change
 * - Allows deletion
 */

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  // Priority color indicator
  const priorityColor =
    task.priority === "high"
      ? "text-red-600"
      : task.priority === "medium"
      ? "text-yellow-600"
      : "text-green-600";

  // Status badge color
  const statusColor =
    task.status === "completed"
      ? "bg-green-200 text-green-800"
      : task.status === "in-progress"
      ? "bg-blue-200 text-blue-800"
      : "bg-gray-200 text-gray-800";

  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition mb-3">
      {/* Title + Priority */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <span className={`text-sm font-medium ${priorityColor}`}>
          {task.priority.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mt-2">{task.description}</p>

      {/* Due Date */}
      <p className="text-sm text-gray-500 mt-1">
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </p>

      {/* Status Badge */}
      <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${statusColor}`}>
        {task.status}
      </span>

      {/* Status Dropdown + Delete */}
      <div className="mt-3 flex items-center gap-3">
        <select
          className="border rounded p-1"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as any)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          className="text-red-600 font-semibold hover:underline"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
