import { type listOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listOfTodos
  onRemoveTodo: (id: string) => void
  onToggleCompletedTodo: (id: string, completed: boolean) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'text-slate-950 bg-slate-500' : ''}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
