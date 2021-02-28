import styles from "./SearchInput.module.scss";
import { GitHubIcon, SearchIcon } from "../../assets";
import { useState } from "react";

export default function SearchInput({ label, icon = null, id, ...props }) {
  const [userFound, setUserFound] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function clearStates() {
    userFound && setUserFound(false);
    notFound && setNotFound(false);
  }

  const renderIcon = () =>
    userFound ? <GitHubIcon size="40" /> : <SearchIcon size="40" />;

  const onSubmit = (e) => {
    e.preventDefault();
    notFound && setNotFound(false);

    setTimeout(() => setNotFound(true), 3000);
  };

  return (
    <form
      className={notFound ? styles.notFound : styles.wrapper}
      onSubmit={onSubmit}
    >
      <input
        required
        id={id}
        className={styles.input}
        {...props}
        onFocus={() => {
          clearStates();
        }}
        onChange={() => {
          clearStates();
        }}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <button className={styles.iconButton} disabled={userFound}>
        {renderIcon()}
      </button>
    </form>
  );
}
