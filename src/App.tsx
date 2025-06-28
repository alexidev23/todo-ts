import { Header } from "./components/Header"
import { InputTodo } from "./components/InputTodo"

function App() {

  return (
    <>
      <Header />
      <h1 className="w-full text-6xl font-semibold text-center py-3.5 text-blue-600 dark:text-white">TODO</h1>
      <InputTodo />
    </>
  )
}

export default App
