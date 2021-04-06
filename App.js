import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style = {styles.homeImage }   source={require("./assets/Home_Image.webp")} />

      <Text style={styles.formText}>E-mail</Text>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        // placeholder="Enter Your E-mail"
        keyboardType="numeric"
      />

      <Text style={styles.formText}>Password</Text>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        // placeholder="Enter your Password"
        keyboardType="numeric"
      />
      {/* <Text>So this is a react native local ios app server, Sweet!</Text> */}
      <View style={[{width:"12rem",     paddingTop : "1rem"
}]}>

      <Button
        title="Sign In"
        color="#a37252"
      // onPress={() => Alert.alert('Simple Button pressed')}
      />
      {/* <br/> */}
      <Text> </Text>
       <Button
       
        title="Sign Up"
        color="#d9b39a"
      // onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
      </View>
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
  input: {
    height: 40,
    margin: 12,
    paddingBottom: 20,
    paddingTop: 20,
    borderWidth: 3,
    borderRadius: 12,
  },
  formText: {
    paddingTop: 20,
    fontSize : 14
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