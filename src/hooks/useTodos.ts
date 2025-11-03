import { useState, useEffect } from "react";
import * as api from "../api/api";
import type { Todo } from "@/types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      // ✅ ahora api.getTodos() ya devuelve un array directamente
      const todosData = await api.getTodos();
      setTodos(todosData);
    } catch (error) {
      console.error("Error al cargar todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text: string) => {
    const newTodo = await api.addTodo({ text });
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = async (id: number, updates: Partial<Todo>) => {
    const updated = await api.updateTodo(id, updates);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTodo = async (id: number) => {
    await api.deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, addTodo, updateTodo, deleteTodo };
};
