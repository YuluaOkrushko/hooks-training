import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGood(good + 1);
  };
  const onNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const onBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={onGoodClick} className={styles.button}>
          Good
        </button>
        <button onClick={onNeutralClick} className={styles.button}>
          Neutral
        </button>
        <button onClick={onBadClick} className={styles.button}>
          Bad
        </button>
      </div>
      <p className={styles.text}>Click {good + neutral + bad} times</p>
    </>
  );
}

export default App;
