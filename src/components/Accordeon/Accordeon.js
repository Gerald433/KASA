import React from "react";
import styles from "./Accordeon.module.css";

const Accordeon = function ({ title, children, className }) {

  return (
    <details className={styles.details + " " + className}>
      <summary className={styles.summary}>{title}</summary>

      <div className={styles.accordeonText}>{children}</div>
    </details>
  );
};

export default Accordeon;
