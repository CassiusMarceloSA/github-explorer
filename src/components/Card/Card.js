import styles from "./Card.module.scss";

export default function Card({ children, ...props }) {
  return (
    <section className={styles.card} {...props}>
      {children}
    </section>
  );
}
