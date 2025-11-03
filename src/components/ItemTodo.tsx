import { useState, type FormEvent, type ChangeEvent } from "react";
import { Checkbox } from "./ui/checkbox";
import { Pencil, X } from "lucide-react";

interface ItemTodoProps {
  text: string;
  completed: boolean;
  toggleCompleted: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

export function ItemTodo({ text, completed, toggleCompleted, onDelete, onEdit }: ItemTodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) return;
    onEdit(editText.trim());
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-between py-2 border-b-2">
      <Checkbox
        checked={completed}
        onClick={toggleCompleted}
        className="border-slate-900 dark:bg-slate-200 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:text-white rounded-full"
        data-cy="check-btn"
        data-button="check"
      />

      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="w-full px-4">
          <input
            data-cy="edit-input"
            value={editText}
            onChange={handleChange}
            className="w-full px-2 py-1 rounded border"
            autoFocus
          />
        </form>
      ) : (
        <p
          className={`text-start w-full px-4 ${
            completed ? "line-through text-gray-400" : "dark:text-white"
          } text-black`}
        >
          {text}
        </p>
      )}

      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            type="submit"
            className="cursor-pointer hover:text-green-600"
            onClick={handleEditSubmit}
            data-cy="save-btn"
            data-button="save"
          >
            💾
          </button>
        ) : (
          <button
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsEditing(true)}
            data-cy="edit-btn"
            data-button="edit"
          >
            <Pencil size={15} />
          </button>
        )}
        <button
          className="cursor-pointer hover:text-red-600"
          onClick={onDelete}
          data-cy="delete-btn"
          data-button="delete"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
