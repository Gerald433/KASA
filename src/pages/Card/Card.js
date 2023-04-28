import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Card.module.css";
import Tags from "../../components/Tags/Tags";
import Star from "../../components/Star/Star";
import Accordeon from "../../components/Accordeon/Accordeon";

const Card = function () {
  const [card, setCard] = useState(null);
  const { cardId } = useParams();
  console.log(cardId);

  useEffect(() => {
    console.log("tata");
    async function fetchCard() {
      try {
        const _cards = await (await fetch("/data/logements.json")).json();

        const cardFound = _cards.find((_card) => _card.id === cardId);
        console.log(_cards);
        setCard(cardFound);
        console.log(cardFound.description);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCard();
  }, []);

  return (
    <React.Fragment>
      <section className={styles.presentation}>
        <p>
          <img
            src={card?.cover}
            className={styles.photo}
            alt="photo d'un appartement bien décoré"
          />
        </p>

        <div className={styles.global}>
          <div className={styles.renseignements}>
            <div className={styles.title}>
              <h1 className={styles.titlePrincipal}>{card?.title}</h1>
              <h2 className={styles.city}>{card?.location}</h2>
              <Tags tags={card?.tags || []} />
            </div>
          </div>

          <div className={styles.localisation}>
            <div className={styles.greyPoint}>
              <p className={styles.autor}>{card?.host.name}</p>
              <img
                className={styles.disc}
                src={card?.host.picture}
                alt="Photo de l'auteur"
              />
            </div>

            <div className={styles.listStarOff}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

          </div>
        </div>
      </section>

      <section className={styles.containerGlobalAccordeon}>
        <Accordeon  title="Description" className={styles.Accordeon} >{card?.description}</Accordeon>

        <Accordeon title="Equipements" className={styles.Accordeon}>
          <ul className={styles.equipementList}>
            <li className={styles.equipements}>{card?.equipments}</li>
          </ul>
        </Accordeon>
      </section>
    </React.Fragment>
  );
};

export default Card;
