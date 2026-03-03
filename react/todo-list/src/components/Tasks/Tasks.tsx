import styles from "./styles.module.scss";
import { useState, type SubmitEventHandler } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  const handleSubmitAddTask: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (taskTitle.length <= 3) {
      alert("A tarefa deve ter mais de 3 caracteres");
      return;
    }

    //adicionar tarefa à lista
    setTasks([
      ...tasks,
      { title: taskTitle, done: false, id: new Date().getTime() },
    ]);
    setTaskTitle("");
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title"> Adicionar Tarefa</label>
          <input
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
