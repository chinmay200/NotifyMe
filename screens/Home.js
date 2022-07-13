import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import Heading from "../components/Heading";
import Progressbar from "../components/Progressbar";
import { colors } from "../constant/colors";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const displayHeight = Dimensions.get("screen").height;

export default function Home() {
  const percent = (50 / 100) * (windowWidth - 100);
  const navigation = useNavigation();

  return (
    <ScrollView style  ={{minHeight:windowHeight , backgroundColor:"red"}}>
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
        {/* <Button title="press" onPress={()=>{navigation.openDrawer()}}/> */}
        <View style={styles.userdetails}>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>
          <Text style={styles.greet}>Good morning, username</Text>

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    minHeight:displayHeight,
    paddingTop: windowHeight * 0.1,
    alignItems: "center",
  },

  heading: {
    color: "red",
  },

  userdetails: {
    backgroundColor: "red",
    width: windowWidth,
    paddingHorizontal: 25,
    marginVertical: 10,
  },

  greet: {
    fontSize: 22,
    color: colors.yellow,
  },
});
