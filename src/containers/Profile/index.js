import { useEffect, useState } from "react";
import router from "next/router";
import {
  Anchor,
  Avatar,
  Button,
  Card,
  RepoList,
  Loader,
  Text,
  Title,
} from "../../components";
import { UserContext } from "../../context";
import {
  getCurrentUserRepos,
  getCurrentUserStarredRepos,
} from "../../services";
import styles from "./Profile.module.scss";
import { ReposIcon, StarIcon } from "../../assets";

const MY_REPOS_CATEGORY = "repos";
const MOST_VISITED_CATEGORY = "starred";

const category = {
  starred: "Mais visitados",
  repos: "Meus Repositórios",
};

export default function Profile() {
  const [repoList, setRepoList] = useState([]);
  const [listCategory, setListCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = UserContext.Use();

  const isMyReposList = () => listCategory === MY_REPOS_CATEGORY;

  const handleRepoList = async (fn, category) => {
    setLoading(true);
    const { success, data } = await fn(user?.login);

    if (success) {
      setRepoList(data);
      setListCategory(category);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(router.query["user"]);
    handleRepoList(getCurrentUserRepos, MY_REPOS_CATEGORY);
  }, []);

  const renderButtonContent = () => {
    return isMyReposList() ? "Ver mais visitados" : "Ver meus repos";
  };

  const buttonIcon = () => {
    return isMyReposList() ? <ReposIcon /> : <StarIcon />;
  };

  return (
    <main className={styles.container}>
      <Card style={{ alignItems: "flex-start" }}>
        <Avatar
          src={user?.avatar_url}
          alt={`Imagem de pefil do usuário ${user?.name}`}
          width="50%"
          style={{ alignSelf: "center" }}
        />
        <Anchor link={user?.html_url} style={{ alignSelf: "center" }}>
          Visitar perfil
        </Anchor>
        <Title>{user?.name}</Title>
        <Text>{user?.login}</Text>
        {user?.bio && (
          <Text style={{ margin: "8px 0 16px", fontSize: "12px" }}>
            {user?.bio}
          </Text>
        )}
        <Text style={{ marginBottom: "4px", fontSize: "12px" }}>
          {user?.followers} seguidores
        </Text>
        <Text style={{ fontSize: "12px" }}>{user?.following} seguindo</Text>
        <Button
          style={{
            alignSelf: "center",
            width: "210px",
            justifyContent: "center",
            outline: "none",
          }}
          icon={!loading && buttonIcon()}
          onClick={() => {
            if (isMyReposList()) {
              handleRepoList(getCurrentUserStarredRepos, MOST_VISITED_CATEGORY);
            } else {
              handleRepoList(getCurrentUserRepos, MY_REPOS_CATEGORY);
            }
          }}
        >
          {loading ? <Loader size="30" /> : renderButtonContent()}
        </Button>
      </Card>
      <div className={styles.listWrapper}>
        <Title white>{category[listCategory]}</Title>
        <RepoList list={repoList} />
      </div>
    </main>
  );
}
