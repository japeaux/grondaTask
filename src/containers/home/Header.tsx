import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header() {
  return (
    <View style={style.contanier}>
       <Image
          source={require('../../../assets/gronda_web_logo_medium_caribbean.png')}
          style={style.image}  />
    </View>
  );
}

const style = StyleSheet.create({
  contanier:{
    alignItems: "center", 
    marginTop:20 
  },
  image:{
    width: windowWidth * 0.50,
    height: windowHeight * 0.06,
    resizeMode: "contain",
  },
});
