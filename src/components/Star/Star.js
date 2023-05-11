import React from "react";
import styles from "./Star.module.css";
import starOn from "../../assets/images/redStar.svg";
import starOff from "../../assets/images/greyStar.svg";

const Star = function ({ cheked }) {
  return (
    <div className={styles.listStarOff}>
      <img
        className={styles.starOff}
        src={cheked ? starOn : starOff}
        alt="étoile de vote non sélectionnée"
      />
    </div>
  );
};

export default Star;
