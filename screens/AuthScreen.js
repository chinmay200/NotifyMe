import { StyleSheet, ImageBackground, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import { colors } from "../constant/colors";
import { Dimensions } from "react-native";
import IconButton from "../components/IconButton";
import Heading from "../components/Heading";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AuthScreen() {
  const [text, onChangeText] = useState("");

  function onLoginSubmit(){
    Alert.alert("Pressed" , "Button pressed")
  }
  return (
    <ImageBackground
      source={require("../assets/banner.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Heading>Username</Heading>
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        value={text}
      />
      <IconButton
        name="right"
        size={30}
        color={colors.black}
        pepperStyle={styles.loginButton}
        onPress = {onLoginSubmit}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: (windowWidth - (windowWidth - 80)) / 2,
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 100,
    borderLeftColor: colors.yellow,
    borderBottomColor: colors.yellow,
    borderRightColor: colors.pink,
    borderTopColor: colors.pink,
    width: windowWidth - 80,
    height: windowHeight - windowHeight * 0.92,
    backgroundColor: colors.black,
    paddingLeft: 16,
    fontSize: 22,
    marginVertical: 40,
  },

  loginButton: {
    position: "relative",
    left:windowWidth - 150
  },
});
