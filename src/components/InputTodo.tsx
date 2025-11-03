import { useState, useCallback } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Input } from "./ui/input";

interface InputTodoProps {
  addTodo: (task: string) => void;
}

export function InputTodo({ addTodo }: InputTodoProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setNewTodo("");
  }, [newTodo, addTodo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10"
    >
      <Input
        type="text"
        aria-label="Agregar nueva tarea"
        placeholder="Escribe una nueva tarea..."
        value={newTodo}
        onChange={handleChange}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent rounded-md shadow-sm w-full p-3 text-xl mb-6"
      />
    </form>
  );
}
