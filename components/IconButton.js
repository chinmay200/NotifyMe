import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../constant/colors";

export default function IconButton({
  name,
  color,
  size,
  pepperStyle,
  onPress,
}) {
  return (
    <Pressable
      style={[styles.buttonContainer, pepperStyle]}
      onPress={onPress}
      android_ripple={{ color: colors.black }}
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
    overflow:"hidden"
  },
});
