import { StyleSheet, Text } from "react-native";
import { colors } from "../constant/colors";


export default function Heading({children}) {
  return (
    <Text style = {styles.heading}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:50,
        color:colors.white,
        letterSpacing:2,
        fontWeight:"300",
        textAlign:"center"
    }
})