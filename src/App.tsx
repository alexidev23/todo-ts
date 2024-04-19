import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='my-8'>Todo with TS</h1>
      <div className='border w-[500px] p-4'>
        <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompletedTodo={handleCompleted}
        />
      </div>
    </div>
  )
}

export default App
