import styles from "./Button.module.scss";

export default function Button({
  children,
  icon = null,
  variant = "solid",
  margin = "",
  style = {},
  ...props
}) {
  return (
    <button className={styles[variant]} style={{ margin, ...style }} {...props}>
      {icon}
      {children}
    </button>
  );
}
