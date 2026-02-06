import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1> MyTodo</h1>
          <span>Bem-vinda, Nay!</span>
        </div>

        <div>{/* <Card/> */}</div>
      </div>
    </header>
  );
};
