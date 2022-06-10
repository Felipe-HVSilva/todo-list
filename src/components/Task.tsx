import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskId {
  id: number;
  content: string;
  completed: boolean;
  onComplete: (id: number) => void;
  onDeleted: (id: number) => void;
}

export function Task({
  id,
  content,
  completed,
  onComplete,
  onDeleted,
}: TaskId) {
  return (
    <div className={styles.taskContent}>
      <input type="checkbox" onClick={() => onComplete(id)} />
      <p className={completed ? styles.complete : ""}>{content}</p>
      <button onClick={() => onDeleted(id)}>
        <Trash size={20} color="#808080" />
      </button>
    </div>
  );
}
