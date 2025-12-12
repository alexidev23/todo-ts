import { useTodos } from "./hooks/useTodos";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { ItemTodo } from "./components/ItemTodo";
import { FilterTasks } from "./components/FilterTasks";
import type { FilterType } from "./types/todo";
import { useState } from "react";

export const App = () => {
  const { todos, loading, addTodo, updateTodo, deleteTodo } = useTodos();

    // estado del filtro
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  // calcular total de items no completados
  const total = todos.filter((t) => !t.completed).length;

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <Header />
      <h1 className="text-6xl font-semibold text-center">TODO APP</h1>
      <InputTodo addTodo={addTodo} />
      <div className="w-full px-10 md:px-0 md:w-150 mx-auto mt-10">
        {todos.map(todo => (
          <ItemTodo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleCompleted={() => updateTodo(todo.id, { completed: !todo.completed })}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={(text) => updateTodo(todo.id, { text })}
          />
        ))}
        <FilterTasks
          total={total}
          currentFilter={currentFilter}
          setFilter={setCurrentFilter}
        />
      </div>
      <footer className="absolute bottom-0 w-full">
        <p className="text-center mt-10 mb-5 text-gray-500">
          &copy; 2025 <a href="https://github.com/alexidev23" target="_blank" rel="noopener noreferrer" className="dark:text-amber-50 text-gray-900">alexidev23</a>
        </p>
      </footer>
    </>
  );
};
