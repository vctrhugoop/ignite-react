import { ClipboardList, PlusCircle } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import logoImage from "./assets/rocket.svg";
import { Tasks } from "./components/Tasks";

type task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

export function App() {
  const [value, setValue] = useState<string>("");
  const [tasks, setTasks] = useState<task[]>(() => {
    const tasksOnStorege = localStorage.getItem("tasks");

    if (tasksOnStorege) {
      return JSON.parse(tasksOnStorege);
    }

    return [];
  });

  function handleTasks(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleNewTasks(event: FormEvent) {
    event.preventDefault();

    if (value === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      content: value,
      isCompleted: false,
    };

    const tasksArray = [...tasks, newTask];

    setTasks(tasksArray);

    setValue("");

    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }

  let taskCount = tasks.length;

  function deleteTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updateTask));
  }

  function updateTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) return acc + 1;
    return acc;
  }, 0);

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
        <form
          className="mt-[-30px] flex w-full gap-2 px-3"
          onSubmit={handleNewTasks}
        >
          <label htmlFor="createTask" className="sr-only">
            Adicione uma nova tafera
          </label>
          <input
            value={value}
            onChange={handleTasks}
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
        <section className="mb-6 mt-16 flex justify-between px-3 text-sm">
          <strong className="flex items-center gap-2 text-sky-500">
            Tarefas criadas
            <span className="rounded-full bg-zinc-700 px-2 py-[2px] text-xs text-zinc-300">
              {tasks.length}
            </span>
          </strong>
          <strong className="flex items-center gap-2 text-indigo-500">
            Concluídas
            <span className="rounded-full bg-zinc-700 px-2 py-[2px]  text-xs text-zinc-300">
              {`${completedTasks} de ${tasks.length}`}
            </span>
          </strong>
        </section>
        {taskCount > 0 ? (
          <ul className="px-3">
            {tasks.map((task) => (
              <Tasks
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center border-t border-zinc-800 py-16 text-zinc-600">
            <ClipboardList size={56} className="mb-4" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </main>
    </div>
  );
}
