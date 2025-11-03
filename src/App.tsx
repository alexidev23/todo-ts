  import { useEffect, useState } from "react"
  import { FilterTasks } from "./components/FilterTasks"
  import { Header } from "./components/Header"
  import { InputTodo } from "./components/InputTodo"
  import { ItemTodo } from "./components/ItemTodo"

  interface TodoProps {
    id: number
    text: string
    completed: boolean
  }

  export type FilterType = "all" | "active" | "completed";

  function App() {
    const [tasks, setTasks] = useState<TodoProps[]>([])
    // Filtro de tareas
    const [filter, setFilter] = useState<FilterType>("all");

    // Cargar del localStorage al iniciar
    useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTasks(JSON.parse(storedTodos));
      }
    }, []);

    // Guardar en localStorage cada vez que cambia
    useEffect(() => {
      console.log("Guardando en localStorage:", tasks);
      localStorage.setItem("todos", JSON.stringify(tasks));
    }, [tasks]);

    const addTodo = (task: string) => {
      const newTodo: TodoProps = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTodo]);
    };

    // Alternar completado
    const toggleCompleted = (id: number) => {
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };

    // Editar tarea
    const editTodo = (id: number, newText: string) => {
      setTasks(prev =>
        prev.map(task => task.id === id ? { ...task, text: newText } : task)
      );
    };

    // Borrar tarea
    const deleteTodo = (id: number) => {
      setTasks(prev => prev.filter(task => task.id !== id));
    };

    const completedTasks = tasks.filter(task => !task.completed).length;

    const filteredTasks = tasks.filter(task => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true; // all
    }); 

    return (
      <>
        <Header />
        <h1 className="w-full text-6xl font-semibold text-center py-3.5 text-blue-600 dark:text-white">TODO</h1>
        <div className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
          <InputTodo addTodo={addTodo} />
          {filteredTasks.map(todo => (
            <ItemTodo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleCompleted={() => toggleCompleted(todo.id)}
              editTodo={editTodo}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
          <FilterTasks
            total={completedTasks}
            currentFilter={filter}
            setFilter={setFilter}
          />
        </div>
        <footer className="absolute bottom-0 w-full">
          <p className="text-center mt-10 mb-5 text-gray-500">
            &copy; 2025 <a href="https://github.com/alexidev23" target="_blank" rel="noopener noreferrer" className="text-amber-50">alexidev23</a>
          </p>
        </footer>
      </>
    )
  }

  export default App
