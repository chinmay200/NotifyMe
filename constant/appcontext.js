// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext ,useState , useEffect} from "react";
import { Alert } from "react-native";

export const AuthContext = createContext({
  setAuthUsername: () => {},
  isAuth: false,
  username: "",
});

function AuthContextProvider({ children }) {
  const [username, setUsername] = useState();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function fetchUsername() {
      const storedUsername = await AsyncStorage.getItem("username");

      if (storedUsername) {
        setUsername(storedUsername);
        setIsAuth(true);
      }
    }

    fetchUsername();
  }, []);

  function setAuthUsername(username) {
    try {
      AsyncStorage.setItem("username", username);
      setIsAuth(true);
    } catch (error) {
        Alert.alert("Some problem occured")
    }
  }

  const value = {
    username: username,
    isAuth: isAuth,
    setAuthUsername: setAuthUsername,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
