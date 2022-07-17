import { useContext, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import { AuthContext } from "../constant/appcontext";
import { colors } from "../constant/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ManageNotes({ route, navigation }) {
  const id = route.params?.noteId;
  const isNote = !!id;
  const authCntxt = useContext(AuthContext);

  const selectedNote = authCntxt.notes.find((note) => note.id === id);

  const [inputs, setInputs] = useState({
    title: selectedNote ? selectedNote.title.toString() : "",
    description: selectedNote ? selectedNote.description.toString() : "",
    date: selectedNote ? selectedNote.date.toString() : "",
  });

  function setInputHandler(identifier, enteredValue) {
    setInputs((currentValues) => {
      return { ...currentValues, [identifier]: enteredValue };
    });
  }

  function onSubmitHandler() {
    if (isNote) {
      authCntxt.updateNotes(id , {...inputs});
      navigation.goBack()
    } else {
      const newNote = inputs;
      authCntxt.addNotes(newNote);
      navigation.goBack();
    }
  }

  return (
    <ImageBackground
      source={require("../assets/notesbanner.png")}
      style={styles.rootContainer}
    >
      <TextInput
        style={styles.inputFields}
        value={inputs.title}
        onChangeText={setInputHandler.bind(this, "title")}
      />
      <TextInput
        style={styles.inputFields}
        value={inputs.description}
        onChangeText={setInputHandler.bind(this, "description")}
      />
      <TextInput
        style={styles.inputFields}
        value={inputs.date}
        onChangeText={setInputHandler.bind(this, "date")}
      />
      <Button title="Submit" onPress={onSubmitHandler} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  inputFields: {
    width: windowWidth * 0.8,
    height: 50,
    fontSize: 22,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 10,
    borderColor: colors.yellow,
    borderWidth: 2,
    marginBottom: 22,
    color: colors.white,
  },
});
