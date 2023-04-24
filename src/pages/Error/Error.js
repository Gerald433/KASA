import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = function () {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>404</h1>
      <h2 className={styles.h2}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h3 className={styles.h3}>
        <Link to="/" className={styles.link}>
          Retourner sur la page d'accueil
        </Link>
      </h3>
    </section>
  );
};

export default Error;
