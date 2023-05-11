import React, { useEffect, useState } from "react";
import styles from "./Tags.module.css";

const Tags = function ({ tags }) {
  return (
    <div className={styles.note}>
      <ul className={styles.advantageList}>
        {tags.map((tag, index) => (
          <li className={styles.advantage} key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
