import { TextInput, Button, StyleSheet, Dimensions, Text } from "react-native";
import { colors } from "../constant/colors";

const windowWidth = Dimensions.get("window").width;

export default function NoteForm({
  onSubmitHandler,
  setInputHandler,
  inputs,
  isValidNote,
}) {
  return (
    <>
      {!isValidNote && <Text style = {styles.warning}>Invalid input please check again!!</Text>}
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
        keyboardType="decimal-pad"
      />
      <Button title="Submit" onPress={onSubmitHandler} />
    </>
  );
}

const styles = StyleSheet.create({
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

  warning:{
    fontSize:18,
    color:colors.yellow,
    marginBottom:20
  }
});
