import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = function () {
  console.log("toto");
  return (
    
    <header>
      <img
        className={styles.logoPrincipal}
        src={require("../../assets/images/logoHeader.png")}
        alt="Logo du site Kasa"
      />
      <ul className={styles.navClass}>
        <li className={styles.elementList}>
          <Link to="/" className={styles.link}>
            Accueil
          </Link>
        </li>
        <li className={styles.elementList}>
          <Link to="/a-propos" className={styles.link}>
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;