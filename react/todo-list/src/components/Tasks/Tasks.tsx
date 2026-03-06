import styles from "./styles.module.scss";
import { useContext, useState, type SubmitEventHandler } from "react";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  const handleSubmitAddTask: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (taskTitle.length <= 3) {
      alert("A tarefa deve ter mais de 3 caracteres");
      return;
    }

    //adicionar tarefa à lista
    const newTasks = [
      ...tasks,
      { title: taskTitle, done: false, id: new Date().getTime() },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  };

  //tarefas concluidas
  function handleChangeTaskDone(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

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
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.done}
                onChange={() => {
                  handleChangeTaskDone(task.id);
                }}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
              <button
                type="button"
                className={styles.trash_button}
                aria-label="Remover tarefa"
                title="Remover tarefa"
                onClick={() => handleRemoveTask(task.id)}
              >
                🗑️
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
