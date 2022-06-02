import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Creation } from '../screens/Creation';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home:undefined
    Creation?:{
        id:number
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

const Stack = createNativeStackNavigator<propsNavigationStack>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Creation" component={Creation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;