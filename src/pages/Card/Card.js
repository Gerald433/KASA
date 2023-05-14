import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import Tags from "../../components/Tags/Tags";
import Star from "../../components/Star/Star";
import Accordeon from "../../components/Accordeon/Accordeon";
import Carroussel from "../../components/Carroussel/Carroussel";

const Card = function () {
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const { cardId } = useParams();
  const range = [1, 2, 3, 4, 5];

  useEffect(() => {
    async function fetchCard() {
      try {
        const _cards = await (await fetch("/data/logements.json")).json();
        const cardFound = _cards.find((_card) => _card.id === cardId);
        if (!cardFound) {
          navigate("/error");
          return;
        }
        setCard(cardFound);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCard();
  }, [cardId, navigate]);

  return (
    <React.Fragment>
      <section className={styles.presentation}>
        <Carroussel photos={card?.pictures ?? []} />

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
                alt="avatar"
              />
            </div>

            <div className={styles.listStarOff}>
              {range.map((rate, index) => (
                <Star cheked={card?.rating >= rate} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.containerGlobalAccordeon}>
        <Accordeon title="Description" summaryNextTo>
          {card?.description}
        </Accordeon>

        <Accordeon title="Equipements" summaryNextTo>
          <ul className={styles.equipementList}>
            {card?.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Accordeon>
      </section>
    </React.Fragment>
  );
};

export default Card;
