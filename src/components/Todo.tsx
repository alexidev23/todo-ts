import { type Todo as TodoType } from '../types.d'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
  onToggleCompletedTodo: (id: string, completed: boolean) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo(id, event.target.checked)
  }

  return (
    <div id={id} className='flex gap-3 w-full border border-red-50 h-10 items-center justify-between'>
      <input
        className="text-center ml-4"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckBox}
      />
      <label>{title}</label>

      <button
        onClick={() => {
          onRemoveTodo(id)
        }}
        className='mr-4'
      >X</button>
    </div>
  )
}
