import {
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from "react-native";
import { colors } from "../constant/colors";

const windowWidth = Dimensions.get("window").width;

export default function NoteForm({
  onSubmitHandler,
  setInputHandler,
  inputs,
  isValidNote,
  isNote,
  onDeleteHandler
}) {
  let buttonContainer = (
    <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={onSubmitHandler} />
    </View>
  );

  if (isNote) {
    buttonContainer = (
      <View style={styles.buttonContainer}>
        <Button title="Delete" onPress={onDeleteHandler} />
        <Button title="Submit" onPress={onSubmitHandler} />
      </View>
    );
  }

  return (
    <>
      {!isValidNote && (
        <Text style={styles.warning}>Invalid input please check again!!</Text>
      )}
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
