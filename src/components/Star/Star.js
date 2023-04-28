import React from "react";
import styles from "./Star.module.css";
import starOff from "../../assets/images/redStar.svg";

const Star = function () {

    return (
        <div className={styles.listStarOff}>
        <img
          className={styles.starOff}
          src={starOff}
          alt="étoile de vote non sélectionnée"
        />
      </div>
    );
  };
  
export default Star;


