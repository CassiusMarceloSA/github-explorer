import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export default {
  Use: useUser,
  Provider: UserProvider,
};
