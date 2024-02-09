import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

type Tasks = {
  content: string;
};

export function Tasks({ content }: Tasks) {
  const [completed, setCompleted] = useState(false);

  function handleIsCompleted() {
    if (completed) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  }

  return (
    <li className="mb-3 flex items-start gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-4">
      <button
        onClick={handleIsCompleted}
        className="mt-1  rounded-full text-sky-500 hover:bg-sky-400/10 hover:text-sky-400"
      >
        {completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
      </button>
      <span
        className={
          completed
            ? "flex-1 text-zinc-500 line-through"
            : "flex-1 text-zinc-300"
        }
      >
        {content}
      </span>
      <button className="rounded-md p-1 text-zinc-500 hover:bg-zinc-700 hover:text-red-500">
        <Trash2 size={16} />
      </button>
    </li>
  );
}