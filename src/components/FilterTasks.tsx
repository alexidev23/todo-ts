export function FilterTasks() {
  return (
    <div className="w-full flex items-center justify-between px-1 py-4">
      <div className="px-1.5 py-1 rounded-md text-sm text-slate-950 dark:text-gray-500">
        0 items
      </div>
      <div className="flex items-center gap-2">
        <button className="px-1.5 py-0.5 rounded-md text-sm border border-slate-950 dark:border-slate-500 font-semibold cursor-pointer text-slate-950 dark:text-gray-500 hover:bg-blue-600 hover:text-slate-300 hover:border-slate-300 hover:dark:text-white hover:dark:border-white">
          active
        </button>
        <button className="px-1.5 py-0.5 rounded-md text-sm border border-slate-950 dark:border-slate-500 font-semibold cursor-pointer text-slate-950 dark:text-gray-500 hover:bg-blue-600 hover:text-slate-300 hover:border-slate-300 hover:dark:text-white hover:dark:border-white">
          completed
        </button>
      </div>
    </div>
  )
}