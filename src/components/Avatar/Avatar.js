import styles from "./Avatar.module.scss";

export default function Avatar({
  src,
  alt,
  width = "20",
  withBorder = false,
  ...props
}) {
  return (
    <img
      width={width}
      className={styles[withBorder ? "withBorder" : "avatar"]}
      src={src}
      alt={alt}
      {...props}
    />
  );
}
