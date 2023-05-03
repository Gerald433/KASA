import React from "react";
import styles from "./Accordeon.module.css";

const Accordeon = function (props) {
  return (
    <section className={styles.quality}>
      <details className={styles.details}>
        <summary className={styles.summary}>{props.title}</summary>
        <div className={styles.accordeonText}>
          {props.children}
        </div>
      </details>
 
    </section>
  );
};

export default Accordeon;
