import React from "react";
import Banner from "../../components/Banner/Banner";
import Accordeon from "../../components/Accordeon/Accordeon";
import background2 from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).jpg";
import styles from "./Apropos.module.css";

const Apropos = function () {
  return (
    <main>
      <Banner src={background2} large />
      <div className={styles.accordeonsBloc}>
        <Accordeon title="Fiabilité" className={styles.accordeonApropos}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Accordeon>

        <Accordeon title="Respect" className={styles.accordeonApropos}>
          <p>
            La surveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Accordeon>

        <Accordeon title="Service" className={styles.accordeonApropos}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Accordeon>

        <Accordeon title="Sécurité" className={styles.accordeonApropos}>
          <p>
            La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Accordeon>
      </div>
    </main>
  );
};

export default Apropos;
