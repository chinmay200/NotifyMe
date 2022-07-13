import { StyleSheet, Text } from "react-native";
import { colors } from "../constant/colors";


export default function Heading({children , pepperStyling}) {
  return (
    <Text style = {[styles.heading , pepperStyling]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:55,
        color:colors.white,
        letterSpacing:2,
        fontWeight:"400",
        textAlign:"center"
    }
})