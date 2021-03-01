import Anchor from "../Anchor";
import Text from "../Text";
import styles from "./RepoItem.module.scss";

export default function RepoItem({ repo }) {
  return (
    <li className={styles.repo}>
      <Text style={{ margin: 0, alignSelf: "unset" }} white>
        {repo.name}
      </Text>
      {!repo.private && (
        <Anchor isExternal secondary link={repo.html_url}>
          Ver repo
        </Anchor>
      )}
    </li>
  );
}
