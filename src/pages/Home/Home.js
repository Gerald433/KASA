import React from "react";
import styles from "./Home.module.css";
import background from "../../assets/images/photoBackgroundIndex.jpg";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";

const Home = function () {
  return (
    <section className={styles.pubSiteSection}>
      <Banner src={background} />
      <h1 className={styles.titlePubSite}>Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Home;
