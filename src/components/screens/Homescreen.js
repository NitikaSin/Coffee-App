import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View, TextInput, Button } from "react-native";

 function Homescreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style = {styles.homeImage }   source={require("../../../assets/Home_image.png")} />
     
      <Text> Description about app</Text>
      <hr />
      <hr />

       <Button
       
        title="Let's Dig Right In!"
        color="#d9b39a"
        onPress={() => navigation.navigate('Dashboard')}

      />

      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe7da",
    alignItems: "center",
    justifyContent: "center",
  },
  
  
  homeImage : {
    marginBottom : 10,
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "transparent"  
  }
});
export default Homescreen;