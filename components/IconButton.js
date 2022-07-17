import { AntDesign } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Dimensions } from "react-native";
import { colors } from "../constant/colors";


export default function IconButton({
  name,
  color,
  size,
  pepperStyle,
  onPress,
  animationProp,
}) {
  
  function IconButtonPressed() {
    //Button Operation
    onPress();

    //Button Animation if present
  }

  return (

    <Pressable
      style={[styles.buttonContainer, pepperStyle]}
      onPress={IconButtonPressed}
      
    >

        <AntDesign name={name} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },


});
