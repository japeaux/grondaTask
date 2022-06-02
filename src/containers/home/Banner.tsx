import React from "react";
import { View, Image , Dimensions, StyleSheet} from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Banner with image on assets folder

export default function Banner() {
  return (
    <View style={style.contanier}>
       <Image
          source={require('../../../assets/marco_mueller_banner.jpg')}
          style={style.image}  />
    </View>
  );
}

const style = StyleSheet.create({
  contanier:{
    alignSelf: "center"
  },
  image:{
    width: windowWidth * 0.90,
    height: windowHeight * 0.20,
    borderRadius:10,
    resizeMode: "contain",
    marginTop:10
  },
});