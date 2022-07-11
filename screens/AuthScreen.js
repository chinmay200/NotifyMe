import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

export default function AuthScreen() {
    const [text, onChangeText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop:200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
