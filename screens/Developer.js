import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export default function Developer() {
const navigation = useNavigation();
  return (
    <View style = {{marginTop:100}}>

    <Button onPress={()=> {navigation.goBack()}} title="Dev"/>
    </View>
  )
}
