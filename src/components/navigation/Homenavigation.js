import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Dashboard";
import Homescreen from "../screens/Homescreen";


const Stack = createStackNavigator();


 function Homenavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Home" component={Dashboard} />

    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default Homenavigation;