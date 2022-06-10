import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./addTask.module.css";

interface AddTaskProps {
  onAddNewTask: (taskValue: string) => void;
}

export function AddTask({ onAddNewTask }: AddTaskProps) {
  const [task, setTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (task === "") {
      return;
    }
    onAddNewTask(task);
    setTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.searchBox}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleNewTaskChange}
      />
      <button>
        Criar
        <PlusCircle color="#fff" size={20} />
      </button>
    </form>
  );
}
