import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Dashboard";
import Homescreen from "../screens/Homescreen";


const Stack = createStackNavigator();


 function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />

    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default Navigation;