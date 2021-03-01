import Head from "next/head";
import Header from "../containers/Header";
import { UserContext } from "../context";
import "../styles/globals.scss";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg" type="image/svg" />
      </Head>
      <Header />
      <UserContext.Provider>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default App;
