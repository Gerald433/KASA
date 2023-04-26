import React from "react";
import styles from "./Thumb.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Thumb = function () {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchCards() {
      try {
        const _cards = await (await fetch("/data/logements.json")).json();
        setCards(_cards);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, []);

  return (
    <section className={styles.section}>
      <ul className={styles.containerItems}>
        {cards.map((card) => {
          return (
            <li className={styles.card} key={card.id}>
              <Link to={`/card/${card.id}`} className={styles.linkImage}>
                <img
                  src={card.cover}
                  alt={card.title}
                  className={styles.imageCard}
                />
                <h2 className={styles.title}>{card.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Thumb;
