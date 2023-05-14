import React, { Fragment, useState, useEffect } from "react";
import styles from "./Home.module.css";
import background from "../../assets/images/photoBackgroundIndex.jpg";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";

const Home = function () {
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
    <Fragment>
      <section className={styles.pubSiteSection}>
        <Banner src={background} large={false} />
        <h1 className={styles.titlePubSite}>Chez vous, partout et ailleurs</h1>
      </section>
      <section className={styles.cardTable}>
        <ul className={styles.containerItems}>
          {cards.map((card, index) => (
            <Thumb card={card} key={index} />
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default Home;
