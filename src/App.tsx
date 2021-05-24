import React from "react";
import styles from "./App.module.css";
import { Logo } from "./components/Logo/Logo";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <Main />
      </main>
    </div>
  );
}

export default App;
