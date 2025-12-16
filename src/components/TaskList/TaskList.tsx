import React, { useState } from "react";
import type { TaskListProps, TaskStatus } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskFilter } from "../TaskFilter/TaskFilter";

/**
 * TaskList
 * - Manages filtering
 * - Renders TaskItem components
 * - Handles status changes + deletion
 */

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority
      ? task.priority === filters.priority
      : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div>
      {/* Filter UI */}
      <TaskFilter onFilterChange={setFilters} />

      {/* Render tasks */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks match your filters.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id} // Unique key required
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};
