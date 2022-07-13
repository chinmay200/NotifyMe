import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Heading from "../components/Heading";
import Progressbar from "../components/Progressbar";
import { colors } from "../constant/colors";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import Card from "../components/Card";
import { useContext } from "react";
import { AuthContext } from "../constant/appcontext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const displayHeight = Dimensions.get("screen").height;

export default function Home() {
  const percent = (50 / 100) * (windowWidth - 100);
  const navigation = useNavigation();
  const authCntxt = useContext(AuthContext);

  function onLogoutPress() {
    Alert.alert("Logout");
  }
  function onTasksPressed() {
    Alert.alert("Tasks");
  }
  function onNotesPressed() {
    Alert.alert("Notes");
  }

  return (
    <ScrollView style={{ minHeight: windowHeight }}>
      <ImageBackground
        source={require("../assets/homepaper.png")}
        resizeMode="cover"
        style={styles.rootContainer}
      >
        <Heading>Profile</Heading>
        <Progressbar
          containerWidth={windowWidth - 100}
          progress={percent}
          color={colors.pink}
        />
        <View style={styles.userdetails}>
          <Title>Hi, {authCntxt.username}</Title>
          <View style={styles.cardContainer}>
            <Card
              title="Tasks"
              cardColor={colors.ligreen}
              color={colors.green}
              icon="add-task"
              onPress={onTasksPressed}
            />
            <Card
              title="Notes"
              cardColor={colors.liyellow}
              color={colors.dryellow}
              icon="assignment"
              onPress={onNotesPressed}
            />

            <Card
              title="Logout"
              cardColor={colors.lipink}
              color={colors.pink}
              icon="logout"
              onPress={onLogoutPress}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    minHeight: displayHeight,
    paddingTop: windowHeight * 0.08,
    alignItems: "center",
  },

  heading: {
    color: "red",
  },

  userdetails: {
    // backgroundColor: "red",
    width: windowWidth,
    paddingHorizontal: 25,
    marginVertical: 10,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    alignItems: "flex-start",
  },
});
