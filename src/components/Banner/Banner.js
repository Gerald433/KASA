import React from "react";
import background2 from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).jpg";
import styles from "./Banner.module.css";

const Banner = function () {
  return (
    <main>
      <section className={styles.pubSiteSection}>
        <img
          className={styles.photoPubSite}
          src={background2}
          alt="photo de chaine de montagne et de forets."
        />
      </section>
    </main>
  );
};

export default Banner;
