import { Head } from "next/document";
import Header from "../containers/Header";
import { UserContext } from "../context";
import "../styles/globals.scss";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Explorer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <UserContext.Provider>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default App;
