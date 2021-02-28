import styles from "./Home.module.scss";

export default function Home({ children }) {
  return <main className={styles.container}>{children}</main>;
}
