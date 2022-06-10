import styles from "./headerTask.module.css";

interface HeaderTaskProps {
  totalTask: number;
  taskIsCompleted: number;
}

export function HeaderTask({ totalTask, taskIsCompleted }: HeaderTaskProps) {
  return (
    <header className={styles.taskHeader}>
      <p className={styles.createTask}>
        Tarefas criadas <span>{totalTask}</span>
      </p>

      <p className={styles.completeTask}>
        Concluídas{" "}
        <span>
          {taskIsCompleted} de {totalTask}
        </span>
      </p>
    </header>
  );
}
