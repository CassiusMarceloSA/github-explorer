import styles from "./Input.module.scss";

export default function Input({ label, icon = null, id, ...props }) {
  return (
    <form className={styles.wrapper}>
      <input required id={id} className={styles.input} {...props} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <button className={styles.iconButton}>{icon}</button>
    </form>
  );
}
