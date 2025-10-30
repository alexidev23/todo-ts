import { Pencil, X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface ItemTodoProps {
  id: number;
  text: string;
  completed?: boolean;
  toggleCompleted: () => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo?: () => void;
}

export function ItemTodo({ id, text, completed = false, toggleCompleted, editTodo, deleteTodo }: ItemTodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) return;
    editTodo(id, editText.trim());
    setIsEditing(false);
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
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 py-1 rounded border"
            autoFocus
          />
        </form>
      ) : (
        <p className={`text-start w-full px-4 ${completed ? "line-through text-gray-400" : "dark:text-white"} text-black`}>
          {text}
        </p>
      )}

      <div className="flex items-center gap-2">
        <button className="cursor-pointer hover:text-blue-600" onClick={() => setIsEditing(true)} data-cy="edit-btn" data-button="edit">
          <Pencil size={15} />
        </button>
        <button className="cursor-pointer" onClick={deleteTodo} data-cy="delete-btn" data-button="delete">
          <X size={15} className="hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}
