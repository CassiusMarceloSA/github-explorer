import styles from "./Loader.module.scss";

export default function Loader({ size, color = "" }) {
  return (
    <svg className={styles.loader} height={size} viewBox="25 25 50 50">
      <circle
        className={color ? styles[color] : styles.circle}
        cx="50"
        cy="50"
        r="20"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
      ></circle>
    </svg>
  );
}
