import { Check, Trash2 } from "lucide-react";

interface TasksProps {
  id: string;
  content: string;
  isCompleted: boolean;
  onUpdateTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({
  id,
  content,
  isCompleted,
  onUpdateTask,
  onDeleteTask,
}: TasksProps) {
  function handleUpdateTask() {
    onUpdateTask(id);
  }

  function handleDeleteComment() {
    onDeleteTask(id);
  }

  return (
    <li
      className={
        isCompleted
          ? "mb-3 flex items-start gap-3 rounded-lg bg-neutral-800 p-4"
          : "mb-3 flex items-start gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-4"
      }
    >
      <button
        onClick={handleUpdateTask}
        className="mt-1 rounded-full text-sky-500 hover:bg-sky-400/10 hover:text-sky-400"
      >
        {isCompleted ? (
          <div className="flex size-4 items-center justify-center rounded-full bg-indigo-600 text-zinc-50 hover:bg-indigo-500">
            <Check size={12} />
          </div>
        ) : (
          <div className=" flex size-4 items-center justify-center rounded-full border border-sky-500 bg-transparent hover:bg-sky-400/10 hover:text-sky-400"></div>
        )}
      </button>
      <span
        className={
          isCompleted
            ? "completed flex-1 text-zinc-500 line-through"
            : "flex-1 text-zinc-300"
        }
      >
        {content}
      </span>
      <button
        onClick={handleDeleteComment}
        className="rounded-md p-1 text-zinc-500 hover:bg-zinc-700 hover:text-red-500"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
}
