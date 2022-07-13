import React from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Card({ title, icon, color, cardColor ,onPress}) {
  return (
    <View style={styles.cardContainer}>
      <Pressable
        style={[styles.card, { backgroundColor: cardColor }]}
        android_ripple={{ color: color }}
        onPress = {onPress}
      >
        <MaterialIcons name={icon} size={66} color={color} />
        <Text style={[{ color: color }, styles.text]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    borderRadius: 16,
  },
  card: {
    height: windowHeight / 6.5,
    width: windowWidth / 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },

  text: {
    fontSize: 19,
  },
});
