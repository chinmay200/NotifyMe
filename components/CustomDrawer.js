import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colors } from "../constant/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import devimage from '../assets/dev.png'

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.yellow, "#ffab3b", colors.black]}
        style={styles.userDetails}
      >
        <Image
          source={require("../assets/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.username}>John Doe</Text>
      </LinearGradient>

      <DrawerContentScrollView {...props} style={styles.navitemsContainer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        style={styles.moreOptionsContainer}
        android_ripple={{ color: colors.yellow }}
        onPress = {() => navigation.navigate("DeveloperScreen")}
      >
        <View style={styles.moreOptions}>
          <Image source={devimage} style={{width:30 , height:30}}/>
          <Text style={styles.moreOptionsText}>Developer</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  userDetails: {
    height: windowHeight / 3.3,
    justifyContent: "flex-end",
    paddingVertical: 50,
    paddingLeft: windowWidth / 15,
  },

  userImage: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },

  username: {
    fontSize: 20,
    color: colors.white,
  },

  moreOptionsContainer: {
    height: windowHeight / 10,
    borderTopWidth: 1,
    borderTopColor: "#cccc",
    padding: 20,
  },

  moreOptions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  moreOptionsText: {
    color: colors.white,
    paddingLeft: 16,
    fontSize: 17,
  },
});
