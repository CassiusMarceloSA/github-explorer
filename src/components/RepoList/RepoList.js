import { RepoItem } from "../";
import styles from "./RepoList.module.scss";

export default function RepoList({ list, ...props }) {
  const renderList = list.map((item, index) => (
    <RepoItem repo={item} key={index} />
  ));

  return (
    <ul {...props} className={styles.list}>
      {renderList}
    </ul>
  );
}
