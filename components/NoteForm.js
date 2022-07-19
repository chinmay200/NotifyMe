import {
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from "react-native";
import { colors } from "../constant/colors";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

export default function NoteForm({
  onSubmitHandler,
  onDeleteHandler,
  selectedNote,
  isNote
}) {

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

  function ValidityCheck() {
    const data = {
      title : inputs.title,
      description : inputs.description,
      date : new Date(inputs.date).toISOString().slice(0,10),
    }

    const dateValid = new Date(data.date).toISOString() !== "Invalid Date";
    const titleValid = data.title.trim().length > 0;
    const descriptionValid = data.description.trim().length > 0

    // console.log(dateValid);
    // console.log(titleValid);
    // console.log(descriptionValid);

    if(dateValid && titleValid && descriptionValid){
      onSubmitHandler(data)
    }
  }

  let buttonContainer = (
    <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={ValidityCheck} />
    </View>
  );

  if (isNote) {
    buttonContainer = (
      <View style={styles.buttonContainer}>
        <Button title="Delete" onPress={onDeleteHandler} />
        <Button title="Edit" onPress={ValidityCheck} />
      </View>
    );
  }


  return (
    <>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.inputFields}
          value={inputs.title}
          onChangeText={setInputHandler.bind(this, "title")}
        />
      </View>
      <View>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.inputFields}
          value={inputs.description}
          onChangeText={setInputHandler.bind(this, "description")}
          multiline={true}
        />
      </View>
      <View>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.inputFields}
          value={inputs.date}
          onChangeText={setInputHandler.bind(this, "date")}
          keyboardType="decimal-pad"
        />
      </View>
      {buttonContainer}
    </>
  );
}

const styles = StyleSheet.create({
  inputFields: {
    width: windowWidth * 0.8,
    fontSize: 22,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 10,
    borderColor: colors.yellow,
    borderWidth: 2,
    marginBottom: 22,
    color: colors.white,
  },

  warning: {
    fontSize: 18,
    color: colors.yellow,
    marginBottom: 20,
  },

  label: {
    fontSize: 19,
    color: colors.liyellow,
    marginBottom: 2,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    alignItems: "center",
  },
});
