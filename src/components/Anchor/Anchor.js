import { GoToLinkIcon } from "../../assets";
import styles from "./Anchor.module.scss";

export default function Anchor({
  children,
  link,
  isExternal,
  icon = <GoToLinkIcon />,
  secondary,
  ...props
}) {
  return (
    <a
      className={secondary ? styles.anchorSecondary : styles.anchor}
      href={link}
      target={isExternal ? "_blank" : ""}
      rel={isExternal ? "noopener noreferrer" : ""}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
