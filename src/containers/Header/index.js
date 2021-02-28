import styles from "./Header.module.scss";
import { Logo } from "../../assets";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
}
