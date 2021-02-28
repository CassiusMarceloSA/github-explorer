import styles from "./SearchInput.module.scss";
import { GitHubIcon, SearchIcon } from "../../assets";
import { useState } from "react";
import Loader from "../Loader";

export default function SearchInput({
  user,
  label,
  icon = null,
  id,
  onSubmit,
  ...props
}) {
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequesStatus] = useState("");

  const renderIcon = () =>
    requestStatus === "found" ? (
      <GitHubIcon size="40" />
    ) : (
      <SearchIcon size="40" />
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequesStatus("");
    setLoading(true);

    const { value } = e.target[0];
    const response = await onSubmit(value);

    if (response.success) {
      setRequesStatus("found");
    } else {
      setRequesStatus("notFound");
    }

    setLoading(false);
  };

  return (
    <form
      className={
        requestStatus === "notFound" ? styles.notFound : styles.wrapper
      }
      onSubmit={handleSubmit}
      {...props}
    >
      <input
        required
        id={id}
        className={styles.input}
        onChange={() => requestStatus === "found" && setRequesStatus("")}
        onFocus={() => requestStatus === "found" && setRequesStatus("")}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <button
        className={styles.iconButton}
        disabled={requestStatus === "found"}
      >
        {loading ? <Loader size="30" color="primary" /> : renderIcon()}
      </button>
    </form>
  );
}
