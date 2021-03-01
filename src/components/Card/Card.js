import styles from "./Card.module.scss";

export default function Card({ children, withAnimation, ...props }) {
  return (
    <section
      className={withAnimation ? styles.cardWithAnimation : styles.card}
      {...props}
    >
      {children}
    </section>
  );
}
