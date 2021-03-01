import styles from "./Title.module.scss";

export default function Title({ children, white, ...props }) {
  return (
    <h2 className={white ? styles.titleWhite : styles.title} {...props}>
      {children}
    </h2>
  );
}
