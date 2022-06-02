import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
//import {IItem} from '../containers/home/CreationItems';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface IItem {
    id: number;
    category_id: number;
    title: string;
    img_url: string;
  }
  
const Item: React.FC<IItem> = ({id, category_id, title, img_url}) => {
  return (
    <View style={style.container}>
        <Image
              source={{uri:img_url}}
              style={style.image}
          />
          <Text style={style.titleCreation}>{title}</Text>  
    </View>
  );
};

const style = StyleSheet.create({
    image:{
        width: windowWidth * 0.40,
        height: windowWidth * 0.40,
        resizeMode: "contain",
        borderRadius:10,
      },
      titleCreation:{
        fontSize: 15, 
        fontWeight: 'bold',
        marginTop:10,
        padding:0, 
        textAlign: 'left', 
      },
      container:{
        flex : 1,
        alignSelf : "center",
        justifyContent: 'center',
        margin: 20,
      }
});
export default Item;