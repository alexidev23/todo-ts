import { FilterTasks } from "./components/FilterTasks"
import { Header } from "./components/Header"
import { InputTodo } from "./components/InputTodo"
import { ItemTodo } from "./components/ItemTodo"

function App() {
  const todos = [
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Estudiar Tailwind", completed: true },
    { id: 3, text: "Practicar Cypress", completed: false },
  ]


  return (
    <>
      <Header />
      <h1 className="w-full text-6xl font-semibold text-center py-3.5 text-blue-600 dark:text-white">TODO</h1>
      <div className="w-full px-10 md:px-0 md:w-[600px] mx-auto mt-10">
        <InputTodo />
        {todos.map(todo => (
          <ItemTodo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        <FilterTasks />
      </div>
    </>
  )
}

export default App
