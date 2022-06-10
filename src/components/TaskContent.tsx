import clipboard from "../assets/Clipboard.svg";
import { Task } from "./Task";

import styles from "./TaskContent.module.css";

interface TaskItens {
  id: number;
  task: string;
  isCompleted: boolean;
}

interface TasksContentProps {
  tasks: TaskItens[];
  completedTask: (id: number) => void;
  deletedTask: (id: number) => void;
}

export function TaskContent({
  tasks,
  completedTask,
  deletedTask,
}: TasksContentProps) {
  console.log(tasks);
  if (tasks.length === 0) {
    return (
      <div className={styles.notTask}>
        <img src={clipboard} alt="Prancheta de tarefas" />
        <strong>Você ainda não tem tarefas cadastradas </strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    );
  }
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.task}
            completed={task.isCompleted}
            onComplete={completedTask}
            onDeleted={deletedTask}
          />
        );
      })}
    </>
  );
}
