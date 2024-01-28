import { Circle, Trash2 } from "lucide-react";

export function Tasks() {
  return (
    <div className="mb-3 flex items-start gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-4">
      <button className="mt-1  rounded-full text-sky-500 hover:bg-sky-400/10 hover:text-sky-400">
        <Circle size={18} />
      </button>
      <p className="text-zinc-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        unde aperiam voluptate reiciendis vero, quam voluptatem. Ab, molestiae
        quis, magni odio quos illum consequuntur iusto corporis, maxime tempore
        recusandae? Architecto.
      </p>
      <button className="rounded-md p-1 text-zinc-500 hover:bg-zinc-700 hover:text-red-500">
        <Trash2 size={16} />
      </button>
    </div>
  );
}
