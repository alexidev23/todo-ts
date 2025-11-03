import type { FilterType } from "@/types/todo";

interface FilterTasksProps {
  total: number;
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export function FilterTasks({ total, currentFilter, setFilter }: FilterTasksProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  const getButtonClasses = (key: FilterType) =>
    [
      "px-1.5 py-0.5 rounded-md text-sm border font-semibold transition-colors duration-200",
      "cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400",
      currentFilter === key
        ? "bg-blue-600 text-white border-blue-600"
        : "text-slate-950 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700",
    ].join(" ");

  return (
    <div className="w-full flex items-center justify-between px-1 py-4">
      <div className="px-1.5 py-1 rounded-md text-sm text-slate-950 dark:text-gray-400">
        {total} {total === 1 ? "item" : "items"}
      </div>

      <div className="flex items-center gap-2">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={getButtonClasses(key)}
            onClick={() => setFilter(key)}
            aria-pressed={currentFilter === key}
            data-cy={`${key}-btn`}
            data-button={key}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
