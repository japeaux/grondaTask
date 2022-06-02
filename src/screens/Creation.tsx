import React, {useEffect, useState} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';

import {propsStack} from '../routes/Router'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Creation(){

    const [visits, setVisits] = useState('');

    //Reads locally stored values by the id and adds +1 to visitis every time tha page is opened
    const readData = async () => {
      try {
        const value = await AsyncStorage.getItem(params.params?.id.toString());
        if (value !== null) {
          setVisits((Number(value)+1).toString());
          saveData((Number(value)+1).toString());
        }else{
          setVisits('1');
          saveData('1');
        }
      } catch (e) {
        console.log('Failed to fetch the input from storage');
      }
    };
    
    const saveData = async (value) => {
      try {
        await AsyncStorage.setItem(params.params?.id.toString(), value)
        console.log('Data successfully saved')
      } catch (e) {
        console.log('Failed to save the data to the storage')
      }
    }

    useEffect(() => {
      readData();
    }, []);

    const navigation = useNavigation<propsStack>()
    const params = useRoute();

    return (
      
      <SafeAreaView style={style.contanier}>
       <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content'/>
        
          <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{marginTop:30}}>
            <Image
                source={require('../../assets/back.png')}
                style={style.image}  
            />
        </TouchableOpacity>

        <View style={style.subcontainer}>
          <Text style={style.text}>{visits}</Text>
          <Text style={style.text}>Visits</Text>
        </View>
        
      </SafeAreaView>

      );
}

const style = StyleSheet.create({
  contanier:{
    backgroundColor: "#28586C", 
    flex: 1
  },
  subcontainer:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontSize:20, 
    fontWeight:'bold',
    color:'white'
  },
  image:{
    width: 60,
    height: 60,
    resizeMode: "contain",
  }
});
