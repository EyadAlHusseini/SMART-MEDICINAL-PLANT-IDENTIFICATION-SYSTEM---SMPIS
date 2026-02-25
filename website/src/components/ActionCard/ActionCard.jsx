import React from "react";
import styles from "./ActionCard.module.css";

function ActionCard({ icon, title, description, bullets = [], onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.iconWrapper}>{icon}</div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {/* The check below prevents the "white screen" crash */}
        {bullets &&
          bullets.length > 0 &&
          bullets.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ActionCard;
