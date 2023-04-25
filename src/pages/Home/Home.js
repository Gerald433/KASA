import React from "react";
import styles from "./Home.module.css"
import background from "../../assets/images/photoBackgroundIndex.jpg"
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";


const Home = function () {
  return (
    <main>
      <Banner src={background} />

      <section className={styles.pubSiteSection}>
        
        <h1 className={styles.titlePubSite}>Chez vous, partout et ailleurs</h1>
      </section>









      
    </main>
  );
};

export default Home;
