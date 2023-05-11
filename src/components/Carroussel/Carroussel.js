import React, { Fragment } from "react";
import styles from "./Carroussel.module.css";
import vectorLeft from "../../assets/images/vectorLeft.svg";
import vectorRight from "../../assets/images/vectorRight.svg";
import { useState } from "react";

const Carroussel = function ({ photos }) {
  console.log(photos);
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.sliderContainer}>
      {photos.length > 1 && (
        <Fragment>
          <button
            className={styles.button}
            onClick={() =>
              setIndex(index === 0 ? photos.length - 1 : index - 1)
            }
          >
            <img src={vectorLeft} />
          </button>
          <button
            className={[styles.button, styles.buttonRight].join(" ")}
            onClick={() => setIndex((index + 1) % photos.length)}
          >
            <img src={vectorRight} />
          </button>
        </Fragment>
      )}

      <ul
        className={styles.slider}
        style={{ transform: `translateX(${index * -100}%)` }}
      >
        {photos.map((photo, index) => (
          <li key={index} className={styles.slide}>
            <img src={photo} className={styles.photo} />
          </li>
        ))}
      </ul>

      <div className={styles.counter}>
        {index + 1}/{photos.length}
      </div>
    </div>
  );
};

export default Carroussel;
