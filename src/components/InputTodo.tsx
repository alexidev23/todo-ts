import { useState } from "react";
import { Input } from "./ui/input";

interface InputTodoProps {
  addTodo: (task: string) => void;
}

export function InputTodo({ addTodo }: InputTodoProps) {
  const [newTodo, setNewTodo] = useState("");
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addTodo(newTodo.trim());
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
      <Input 
        type="text"
        placeholder="new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent rounded-md shadow-sm w-full p-3 text-xl mb-6"
      />
    </form>
  )
}