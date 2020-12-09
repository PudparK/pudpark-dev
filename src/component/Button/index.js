import React from "react";
import styles from "./styles.modules.scss";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button + "noSelect"}>
      {text}
    </button>
  );
}

export default Button;
