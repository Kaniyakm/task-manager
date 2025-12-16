import React, { useState } from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

/**
 * TaskFilter
 * - Allows filtering by status and priority
 * - Sends filter object back to parent
 */

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<TaskStatus | "all">("all");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "all">(
    "all"
  );

  // Notify parent when filters change
  const updateFilters = () => {
    onFilterChange({
      status: status === "all" ? undefined : status,
      priority: priority === "all" ? undefined : priority,
    });
  };

  return (
    <div className="flex gap-4 mb-4">
      {/* Status Filter */}
      <select
        className="border p-2 rounded"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as any);
          updateFilters();
        }}
      >
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value as any);
          updateFilters();
        }}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};