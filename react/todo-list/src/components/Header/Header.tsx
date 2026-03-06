import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1> MyTodo</h1>
          <span>Bem-vinda, Nay!</span>
        </div>

        <div>
          <StatsCard title="Total de tarefas" value={tasks.length} />
          <StatsCard
            title="Tarefas pendentes"
            value={tasks.filter((task) => !task.done).length}
          />
          <StatsCard
            title="Tarefas concluídas"
            value={tasks.filter((task) => task.done).length}
          />
        </div>
      </div>
    </header>
  );
};
