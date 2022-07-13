import { useEffect, useRef } from "react";
import { StyleSheet,Animated } from "react-native";
import { colors } from "../constant/colors";

export default function Progressbar({containerWidth , progress , color}) {
  const fillUpProgress = useRef(new Animated.Value(0)).current
  const fillUp = useRef(new Animated.Value(0)).current


  useEffect(()=>{
    Animated.timing(fillUpProgress , {
      useNativeDriver:false,
      toValue:progress,
      duration:700
    }).start()

    Animated.timing(fillUp , {
      toValue:containerWidth,
      useNativeDriver:false,
      duration:700
    }).start()
  } , [])
  return (
    <Animated.View style = {[styles.progressContainer , {width:fillUp}] }>
      <Animated.View style = {[styles.progressBar , {width:fillUpProgress , backgroundColor:color}]}></Animated.View>
    </Animated.View>
  );
}

const styles  =StyleSheet.create({
    progressContainer:{
        backgroundColor:colors.white,
        borderRadius:20,
        height:6
    },
    progressBar:{
        borderRadius:20,
        height:6
    }
})
