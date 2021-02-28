import styles from "./Card.module.scss";

export default function Card({ children }) {
  return <section className={styles.card}>{children}</section>;
}
