import { useContext, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import NoteForm from "../components/NoteForm";
import { AuthContext } from "../constant/appcontext";

export default function ManageNotes({ route, navigation }) {
  const id = route.params?.noteId;
  const isNote = !!id;
  const authCntxt = useContext(AuthContext);

  const selectedNote = authCntxt.notes.find((note) => note.id === id);

 
  function onSubmitHandler(data) {
    if (isNote) {
      authCntxt.updateNotes(id, { ...data });
      navigation.goBack();
    } else {
      const newNote = [{
        title:data.title,
        description:data.description,
        date:data.date
      }];
      // console.log('====================================');
      // console.log(newNote);
      // console.log('====================================');
      authCntxt.addNotes(newNote[0]);
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
        onSubmitHandler={onSubmitHandler}
        selectedNote = {selectedNote}
        onDeleteHandler = {onDeleteHandler}
        isNote ={isNote}
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
