import type { Todo } from "@/types/todo";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/todos";

// 👇 Tipo que refleja la respuesta del backend
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// 🔹 Obtener todos los todos
export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get<ApiResponse<Todo[]>>(BASE_URL);
  // Convertimos el 0/1 en boolean
  return data.data.map((todo) => ({
    ...todo,
    completed: Boolean(todo.completed),
  }));
};

// 🔹 Agregar un nuevo todo
export const addTodo = async (todo: Partial<Todo>): Promise<Todo> => {
  const { data } = await axios.post<ApiResponse<Todo>>(BASE_URL, todo);
  return { ...data.data, completed: Boolean(data.data.completed) };
};

// 🔹 Actualizar un todo
export const updateTodo = async (id: number, updates: Partial<Todo>): Promise<Todo> => {
  const { data } = await axios.put<ApiResponse<Todo>>(`${BASE_URL}/${id}`, updates);
  return { ...data.data, completed: Boolean(data.data.completed) };
};

// 🔹 Eliminar un todo
export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
