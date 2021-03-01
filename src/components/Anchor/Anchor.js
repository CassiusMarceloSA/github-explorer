import { GoToLinkIcon } from "../../assets";
import styles from "./Anchor.module.scss";

export default function Anchor({ children, link, secondary, ...props }) {
  return (
    <a
      className={secondary ? styles.anchorSecondary : styles.anchor}
      href={link}
      target="_blanck"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <GoToLinkIcon />
    </a>
  );
}
