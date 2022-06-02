import React, { useState, useEffect } from 'react';
import { View,
        StyleSheet, 
        Dimensions, 
        ScrollView, 
        TouchableOpacity
    } from 'react-native';
import {propsStack} from '../../routes/Router'
import { useNavigation } from '@react-navigation/native'
import Item from '../../components/CreationItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


    const items = [
        {
          "id":1,
          "category_id":1,
          "title":"The Limit is The Sky ",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG"
        },
        {
          "id":2,
          "category_id":2,
          "title":"Avocado Cream",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG"
        },
        {
          "id":3,
          "category_id":2,
          "title":"Sandwich",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG"
        },
        {
          "id":4,
          "category_id":2,
          "title":"",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/q2b.JPEG"
        },
        {
          "id":5,
          "category_id":1,
          "title":"Panificando",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png" 
        },
        {
          "id":6,
          "category_id":3,
          "title": "",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG"
        },
        {
          "id":7,
          "category_id":2,
          "title":"Desayuno",
          "img_url": "https://d2bn8tb344j6vy.cloudfront.net/4BHK6UC1U1/stories/8l.JPEG"
        }
      ];
    
      
export default function CreationItems() {

  // Fill data from API here
  // const [items, setItems] = useState<IItem[]>([]);

  const navigation = useNavigation<propsStack>() 

    return (

    <ScrollView  contentContainerStyle={style.scroll} >
        {items.map((items, index) => {
        return (
            <View key={index} style={style.contanier}>
              <TouchableOpacity onPress={()=>navigation.navigate("Creation",{
                id:index
              })}>
                <Item category_id= {items.category_id} id={items.id} title={items.title} img_url = {items.img_url} />
              </TouchableOpacity>
                
            </View>
        );
        })}
    </ScrollView>
    )
}

const style = StyleSheet.create({
  contanier:{
    width : '50%', 
    flexDirection : "row"
  },
  row: {
      flex: 1,
      justifyContent: 'space-between'
  },
  card: {
      flex : 1,
      alignSelf : "center",
      justifyContent: 'center',
      margin: 20,
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
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
  }
});
