import { useContext, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import NoteForm from "../components/NoteForm";
import { AuthContext } from "../constant/appcontext";

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
  const [isValidNote, setIsValidNote] = useState(false);

  function setInputHandler(identifier, enteredValue) {
    setInputs((currentValues) => {
      return { ...currentValues, [identifier]: enteredValue };
    });
  }

  function ValidityCheck() {
    const data = {
      title : inputs.title,
      description : inputs.description,
      date : new Date(inputs.date),
    }

    const dateValid = new Date(data.date).toString() !== "Invalid Date";
    const titleValid = data.title.trim().length > 0;
    const descriptionValid = data.description.trim().length > 0


    if(dateValid && titleValid && descriptionValid){
      onSubmitHandler()
      setIsValidNote(true)
    }
    else{
      setIsValidNote(false)
    }
  }

  function onSubmitHandler() {
    if (isNote) {
      authCntxt.updateNotes(id, { ...inputs });
      navigation.goBack();
    } else {
      const newNote = inputs;
      authCntxt.addNotes(newNote);
      navigation.goBack();
    }
  }

  function onDeleteHandler(){
    authCntxt.deleteNotes(id)
    navigation.goBack()
  }

  return (
    <ImageBackground
      source={require("../assets/notesbanner.png")}
      style={styles.rootContainer}
    >
      <NoteForm
        setInputHandler={setInputHandler}
        onSubmitHandler={ValidityCheck}
        inputs={inputs}
        isValidNote={isValidNote}
        isNote = {isNote}
        onDeleteHandler = {onDeleteHandler}
      />
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
});
