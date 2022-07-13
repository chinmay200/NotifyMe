import { StyleSheet, ImageBackground, TextInput, Animated } from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import { colors } from "../constant/colors";
import { Dimensions } from "react-native";
import IconButton from "../components/IconButton";
import Heading from "../components/Heading";
import { AuthContext } from "../constant/appcontext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AuthScreen() {
  const [username, setUsername] = useState("");
  const authCntxt = useContext(AuthContext)

  function validateUserName(enteredValue){
    setUsername(enteredValue)
  }

  function onLogin(username){
    authCntxt.setAuthUsername(username)
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
        onChangeText={validateUserName}
        value={username}
        autoCapitalize="none"
      />
        <IconButton
          name="right"
          size={30}
          color={colors.black}
          pepperStyle={styles.loginButton}
          animationProp={true}
          onPress={()=>{onLogin(username)}}
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
    paddingLeft: 20,
    fontSize: 35,
    marginVertical: 26,
    color: colors.white,
  },

  loginButton: {
    position: "relative",
    left: windowWidth - 150,
  },
});
