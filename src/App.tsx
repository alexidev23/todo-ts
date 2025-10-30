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

  function App() {
    const [tasks, setTasks] = useState<TodoProps[]>([])

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

    const completedTasks = tasks.filter(task => !task.completed).length;

    return (
      <>
        <Header />
        <h1 className="w-full text-6xl font-semibold text-center py-3.5 text-blue-600 dark:text-white">TODO</h1>
        <div className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
          <InputTodo addTodo={addTodo} />
          {tasks.map(todo => (
            <ItemTodo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleCompleted={() => toggleCompleted(todo.id)}
            />
          ))}
          <FilterTasks total={completedTasks} />
        </div>
      </>
    )
  }

  export default App
