import { useState } from "react";
import { getUser } from "../../services";
import { UserContext } from "../../context";
import { Avatar, Button, Card, SearchInput } from "../../components";
import styles from "./Home.module.scss";
import { GitHubIcon } from "../../assets";
import router from "next/router";

const renderTextByStatus = {
  searching: "Estamos procurando pelo usuário...",
  initial: "Procure por usuários do GitHub utilizando o campo de busca acima",
  notFound: "Opa. Nenhum usuário foi encontrado",
};

export default function Home() {
  const [searchStatus, setSearchStatus] = useState("initial");
  const { setUser, user } = UserContext.Use();

  const onSubmit = async (value) => {
    setSearchStatus("searching");
    const userResponse = await getUser(value.trim());

    if (userResponse.success) {
      setUser({
        ...userResponse.data,
      });
      setSearchStatus("initial");
    } else {
      setUser(null);
      setSearchStatus("notFound");
    }

    return userResponse;
  };

  return (
    <main className={styles.container}>
      <SearchInput
        style={{ margin: "2rem 0" }}
        label="Quem você está procurando?"
        onSubmit={onSubmit}
      />
      {user ? (
        <Card>
          <Avatar
            src={user.avatar_url}
            alt={`Imagem de pefil do usuário ${user.name}`}
            width="100%"
          />
          <h2 className={styles.userName}>{user.name}</h2>
          <p className={styles.userNickname}>{user.login}</p>
          <Button
            icon={<GitHubIcon />}
            onClick={() => router.push(`${user.login}`)}
          >
            Ver detalhes
          </Button>
        </Card>
      ) : (
        <h1 className={styles.paragraph}>{renderTextByStatus[searchStatus]}</h1>
      )}
    </main>
  );
}
