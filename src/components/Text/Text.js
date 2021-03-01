import styles from "./Text.module.scss";

export default function Text({ children, white, ...props }) {
  return (
    <p className={white ? styles.paragraphWhite : styles.paragraph} {...props}>
      {children}
    </p>
  );
}
