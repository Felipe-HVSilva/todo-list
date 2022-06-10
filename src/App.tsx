import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { TaskContent } from "./components/TaskContent";
import { HeaderTask } from "./components/HeaderTask";

import styles from "./App.module.css";
import "./global.module.css";

import { useState } from "react";

interface TaskProps {
  id: number;
  task: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const totalTask = tasks.length;

  const taskIsCompleted = tasks.reduce((acc, task) => {
    if (task.isCompleted === true) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  function handleAddNewTask(taskValue: string) {
    const newTask = {
      id: tasks.length + 1,
      task: taskValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function completedTask(id: number) {
    const taskCompleted = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(taskCompleted);
  }

  function deleteTask(id: number) {
    const taskDeleted = tasks.filter((task) => task.id !== id);

    setTasks(taskDeleted);
  }

  return (
    <>
      <Header />
      <AddTask onAddNewTask={handleAddNewTask} />
      <div className={styles.wrapper}>
        <main className={styles.tasks}>
          <HeaderTask totalTask={totalTask} taskIsCompleted={taskIsCompleted} />

          <div className={styles.taskContainer}>
            <TaskContent
              tasks={tasks}
              completedTask={completedTask}
              deletedTask={deleteTask}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
