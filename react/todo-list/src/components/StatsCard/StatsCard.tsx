import styles from "./styles.module.scss";

export const StatsCard: React.FC = () => {
  return (
    <article className={styles.stats_Card}>
      <h2>Total de tarefas</h2>
      <span>10</span>
    </article>
  );
};
