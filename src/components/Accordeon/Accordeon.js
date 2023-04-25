import React from "react";
import styles from "./Accordeon.module.css";

const Accordeon = function () {
  return (
    <section className={styles.quality}>
      <details className={styles.details}>
        <summary className={styles.summary}>Fiabilité</summary>
        <p className={styles.accordeonText}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </details>
      <details className={styles.details}>
        <summary className={styles.summary}>Respect</summary>
        <p className={styles.accordeonText}>
          La surveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </details>
      <details className={styles.details}>
        <summary className={styles.summary}>Service</summary>
        <p className={styles.accordeonText}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </details>
      <details className={styles.details}>
        <summary className={styles.summary}>Sécurité</summary>
        <p className={styles.accordeonText}>
          La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </details>
    </section>
  );
};

export default Accordeon;