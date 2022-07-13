import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constant/colors";

export default function Title({ children }) {
  return (
    <View>
      <Text style  ={styles.greet}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    greet: {
        fontSize: 37,
        color: colors.white,
      },
})