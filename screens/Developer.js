import { useNavigation } from "@react-navigation/native";
import { Button, View} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../constant/appcontext";

export default function Developer() {
const navigation = useNavigation();

const authCntxt = useContext(AuthContext);
  return (
    <View style = {{marginTop:100}}>

    <Button onPress={()=> {authCntxt.logOutUser()}} title="Dev"/>
    </View>
  )
}
