import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Banner from "../containers/home/Banner";
import Header from "../containers/home/Header";
import CreationList from '../containers/home/CreationList'


export function Home(){
  

  return (
    <SafeAreaView style={style.contanier}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle='dark-content'/>
      <Header/>
      <ScrollView>
        <Banner/>
        <Text style={style.textSeparetor}>Creation for you</Text>
        <CreationList />
      </ScrollView>
    </SafeAreaView>
    );
}

const style = StyleSheet.create({
  contanier:{
    backgroundColor: "#fff", 
    flex: 1 
  },
  textSeparetor:{
    fontSize:20, 
    fontWeight: 'bold', 
    marginLeft:20, 
    marginTop:20
  },
});
