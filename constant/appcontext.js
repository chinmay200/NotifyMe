// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext({
  setAuthUsername: () => {},
  isAuth: false,
  username: "",
  logOutUser: () => {},
  notes: [],
  addNotes: () => {},
  updateNotes: () => {},
  deleteNotes: () => {},
});

function AuthContextProvider({ children }) {
  const [username, setUsername] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [notes, setNotes] = useState([]);

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
      setUsername(username);
    } catch (error) {
      Alert.alert("Some problem occured");
    }
  }

  function logOutUser() {
    AsyncStorage.removeItem("username");
    setIsAuth(false);
    setUsername("");
  }

  function addNotes(note) {
    const id = new Date().toString() + Math.random().toString();
    const newNote = {
      id: id,
      title: note.title,
      description: note.description,
      date:note.date
    };
    setNotes((prevNotes) => [newNote , ...prevNotes])
  }
  function deleteNotes() {}
  function updateNotes(id , {title , description , date}) {
    let updateIndex = -1;

    for(let i = 0; i < notes.length; i++){
      const note = notes[i];
      if(id === note.id){
        updateIndex = i;
        break;
      }
    }

    const updatedNote = {
      id:id,
      title:title,
      description:description,
      date:date
    }

    const updatedNotesList = [...notes];
    updatedNotesList[updateIndex] = updatedNote
    setNotes([...updatedNotesList])
  }

  const value = {
    username: username,
    isAuth: isAuth,
    setAuthUsername: setAuthUsername,
    logOutUser: logOutUser,
    notes: notes,
    addNotes: addNotes,
    updateNotes: updateNotes,
    deleteNotes: deleteNotes,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
