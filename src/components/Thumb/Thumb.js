import React from "react";
import styles from "./Thumb.module.css";
import { Link } from "react-router-dom";

const Thumb = function ({ card }) {
  return (
    <li className={styles.card} key={card.id}>
      <Link to={`/card/${card.id}`} className={styles.linkImage}>
        <img src={card.cover} alt={card.title} className={styles.imageCard} />
        <h2 className={styles.title}>{card.title}</h2>
      </Link>
    </li>
  );
};

export default Thumb;
