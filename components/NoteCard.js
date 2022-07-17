import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { colors } from "../constant/colors";
import Title from "./Title";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NoteCard({ title, description, date , onPress}) {
  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.card} onPress = {onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style = {styles.descriptionContainer}>
          <Text>
            {description.length > 50
              ? description.substring(0, 100)+" ..."
              : description}
          </Text>
        </View>
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
    height: windowHeight / 5,
    width: windowWidth / 2.3,

    borderRadius: 16,
    backgroundColor: colors.dryellow,
    margin: 7,
  },

  title: {
    marginVertical: 8,
    marginLeft: 6,
    fontSize: 16,
    color: colors.black,
  },

  date: {
    marginBottom: 2,
    fontSize: 16,
    color: colors.black,
    position: "absolute",
    right: 6,
    top: 8,
  },

  descriptionContainer: {
    borderTopColor: colors.black,
    borderTopWidth: 1.5,
    paddingHorizontal: 14,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    elevation:90,
    shadowColor:"black",
    shadowOffset:{x:100 , y:100},
    shadowOpacity:0.76
  },
});
