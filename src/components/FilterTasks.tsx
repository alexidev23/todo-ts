import type { FilterType } from "@/App";

interface FilterTasksProps {
  total: number;
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export function FilterTasks({ total, currentFilter, setFilter }: FilterTasksProps) {
  return (
    <div className="w-full flex items-center justify-between px-1 py-4">
      <div className="px-1.5 py-1 rounded-md text-sm text-slate-950 dark:text-gray-500">
        {total} items
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`px-1.5 py-0.5 rounded-md text-sm border font-semibold cursor-pointer ${
            currentFilter === "active" ? "bg-blue-600 text-white" : "text-slate-950 dark:text-gray-500"
          }`}
          onClick={() => setFilter("active")}
          data-cy="active-btn" data-button="active"
        >
          Active
        </button>
        <button
          className={`px-1.5 py-0.5 rounded-md text-sm border font-semibold cursor-pointer ${
            currentFilter === "completed" ? "bg-blue-600 text-white" : "text-slate-950 dark:text-gray-500"
          }`}
          onClick={() => setFilter("completed")}
          data-cy="completed-btn" data-button="completed"
        >
          Completed
        </button>
        <button
          className={`px-1.5 py-0.5 rounded-md text-sm border font-semibold cursor-pointer ${
            currentFilter === "all" ? "bg-blue-600 text-white" : "text-slate-950 dark:text-gray-500"
          }`}
          onClick={() => setFilter("all")}
          data-cy="all-btn" data-button="all"
        >
          All
        </button>
      </div>
    </div>
  )
}