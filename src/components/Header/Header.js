import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = function () {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img
        className={styles.logoPrincipal}
        src={require("../../assets/images/logoHeader.png")}
        alt="Logo du site Kasa"
      />
      <ul className={styles.navClass}>
        <li>
          <Link
            to="/"
            className={
              styles.link +
              " " +
              (location.pathname === "/" ? styles["link-active"] : "")
            }
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className={
              styles.link +
              " " +
              (location.pathname === "/a-propos" ? styles["link-active"] : "")
            }
          >
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
