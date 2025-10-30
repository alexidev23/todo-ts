import { Input } from "./ui/input";

export function InputTodo() {
  return (
    <div className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
      <Input 
        type="text"
        placeholder="new todo..."
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent rounded-md shadow-sm w-full p-3 text-xl mb-6"
      />
    </div>
  )
}