import styles from "./ActionCard.module.css";

function ActionCard({ title, description, shortcut, icon, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.iconWrapper}>{icon}</div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
    </div>
  );
}

export default ActionCard;
