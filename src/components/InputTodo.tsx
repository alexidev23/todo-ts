import { ItemTodo } from "./ItemTodo";
import { Input } from "./ui/input";

export function InputTodo() {
  const todos = [
    { id: 1, text: "Aprender React" },
    { id: 2, text: "Estudiar Tailwind"},
    { id: 3, text: "Practicar Cypress"},
  ]
  
  return (
    <div className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
      <Input 
        type="text"
        placeholder="new todo..."
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent rounded-md shadow-sm w-full p-3 text-xl mb-6"
      />
      {todos.map(todo => (
        <ItemTodo
          key={todo.id}
          text={todo.text}
        />
      ))}
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
    </div>
  )
}