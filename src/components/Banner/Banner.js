import React from "react";
import styles from "./Banner.module.css";

const Banner = function ({ src, large }) {
  return (
    <section
      className={
        large
          ? styles.mobileLarge + " " + styles.pubSiteSection
          : styles.pubSiteSection
      }
    >
      <img
        className={styles.photoPubSite}
        src={src}
        alt="Chaine de montagne et de forets."
      />
    </section>
  );
};

export default Banner;
