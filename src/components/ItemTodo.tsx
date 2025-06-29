import { Pencil, X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface ItemTodoProps {
  text: string;
}

export function ItemTodo({ text }: ItemTodoProps) {
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setTodoCompleted(!todoCompleted);
  }

  return (
    <div className="w-full flex items-center justify-between py-2 border-b-2">
      <Checkbox onCheckedChange={handleCheckboxChange} className="border-slate-900 dark:bg-slate-200 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:text-white rounded-full" />
      <p className={`text-start w-full px-4 ${todoCompleted ? "line-through text-gray-400" : "text-white"}`}>{text}</p>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer hover:text-blue-600">
          <Pencil size={15} />
        </button>
        <button className="cursor-pointer">
          <X size={15} className="hover:text-red-600" />
        </button>
      </div>
    </div>
  )
}