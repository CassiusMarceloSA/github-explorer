import Header from "../containers/Header";
import { UserContext } from "../context";
import "../styles/globals.scss";
function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <UserContext.Provider>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default App;
