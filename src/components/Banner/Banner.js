import React from "react";
// import background2 from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).jpg";
import styles from "./Banner.module.css";

const Banner = function ({ src, large }) {
  console.log(large);
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
        alt="photo de chaine de montagne et de forets."
      />
    </section>
  );
};

export default Banner;
