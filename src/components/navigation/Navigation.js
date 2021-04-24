import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Dashboard";
import Homescreen from "../screens/Homescreen";
import Auth from "../Authentication/Auth";



const Stack = createStackNavigator();


 function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Auth" component={Auth} />
     

    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default Navigation;