import { PlusCircle } from "lucide-react";
import logoImage from "./assets/rocket.svg";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <header className="h-[200px] bg-zinc-950">
        <div className="mx-auto flex h-full max-w-3xl items-center justify-center space-x-3">
          <img src={logoImage} className="mt-3" />
          <h1 className="text-5xl font-black text-sky-500">
            to<span className="text-indigo-500">do</span>
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-3xl">
        <form className="mt-[-30px] flex w-full gap-2">
          <label htmlFor="createTask" className="sr-only">
            Adicione uma nova tafera
          </label>
          <input
            type="text"
            name="createTask"
            placeholder="Adicione uma nova tarefa"
            className="w-full rounded-lg border border-zinc-900 bg-zinc-800 p-4 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-sky-600 p-4 font-bold text-zinc-100 hover:bg-sky-400"
          >
            Criar
            <PlusCircle size={16} strokeWidth={2.5} />
          </button>
        </form>
        <section className="mb-6 mt-16 flex justify-between text-sm">
          <strong className="flex items-center gap-2 text-sky-500">
            Tarefas criadas
            <span className="rounded-full bg-zinc-700 px-2 py-[2px] text-xs text-zinc-300">
              2
            </span>
          </strong>
          <strong className="flex items-center gap-2 text-indigo-500">
            Concluídas
            <span className="rounded-full bg-zinc-700 px-2 py-[2px]  text-xs text-zinc-300">
              0 de 2
            </span>
          </strong>
        </section>
        <Tasks />
        <Tasks />
      </main>
    </div>
  );
}
