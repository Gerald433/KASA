import React, { Fragment } from "react";
import styles from "./Home.module.css";
import background from "../../assets/images/photoBackgroundIndex.jpg";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";

const Home = function () {
  return (
    <Fragment>
      <section className={styles.pubSiteSection}>
        <Banner src={background} large={false} />
        <h1 className={styles.titlePubSite}>Chez vous, partout et ailleurs</h1>
      </section>
      <section className={styles.cardTable}>
        <Thumb />
      </section>
    </Fragment>
  );
};

export default Home;
