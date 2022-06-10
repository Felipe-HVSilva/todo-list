import todoLogo from "../assets/todo-logo.svg";

import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img
          src={todoLogo}
          alt="ToDo escrito em Azul com um foguete do lado esquerdo"
        />
      </header>
    </>
  );
}
