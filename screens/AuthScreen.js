import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import { colors } from "../constant/colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function AuthScreen() {
    const [text, onChangeText] = useState("");
  return (
    <View style = {styles.container}>
      <TextInput
    style = {styles.inputField}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.black,
    justifyContent:"center",
    alignItems:"center"
  },
  inputField:{
    borderWidth:1.5,
    borderRadius:200,
    borderLeftColor:colors.yellow,
    borderBottomColor:colors.yellow,
    borderRightColor:colors.pink,
    borderTopColor:colors.pink,
    width:windowWidth-20,
    height:windowHeight-(windowHeight*0.91),
    backgroundColor:colors.black,
    paddingLeft:16,
    fontSize:22
  }
});
