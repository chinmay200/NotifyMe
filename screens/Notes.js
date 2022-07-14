import {
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import IconButton from "../components/IconButton";
import NoteCard from "../components/NoteCard";
import { colors } from "../constant/colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Heading from "../components/Heading";
import Progressbar from "../components/Progressbar";
import { notes } from "../data/notes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const displayHeight = Dimensions.get("screen").height;

export default function Notes() {
  const percent = (50 / 100) * (windowWidth - 100);
  return (
    <>
      <IconButton
        name="plus"
        color={colors.black}
        onPress={() => {}}
        size={36}
        pepperStyle={styles.addNoteButton}
      />

      <ImageBackground
        source={require("../assets/notesbanner.png")}
        resizeMode="cover"
        style={[styles.rootContainer]}
      >
        <Heading>My Work</Heading>
        <Progressbar
          containerWidth={windowWidth - 100}
          progress={percent}
          color={colors.yellow}
        />
        <FlatList
        style = {{marginTop:8}}
          data={notes}
          renderItem={(itemData) => {
            return (
              <NoteCard
                title={itemData.item.title}
                description={itemData.item.description}
                date = {itemData.item.date}
              />
            );
          }}
          numColumns={2}
        />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    minHeight: displayHeight,
    alignItems: "center",
    paddingTop: displayHeight * 0.14,
    paddingBottom: displayHeight * 0.16,
  },

  addNoteButton: {
    position: "absolute",
    bottom: 30,
    zIndex: 1,
    right: 30,
  },
});
