import styles from "./ActionCard.module.css";

function ActionCard({ icon, title, description, bullets }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActionCard;
