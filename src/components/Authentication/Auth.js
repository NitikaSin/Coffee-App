import  React, {useEffect} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import Navigation from "../navigation/Navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../screens/Dashboard";

WebBrowser.maybeCompleteAuthSession();

function Auth({navigation})
{


    const [request, response, promptAsync] = Google.useAuthRequest({
      
        webClientId: '547398309122-iich8dd9qfio7olo6fscerpgnk4npg84.apps.googleusercontent.com',
        
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
        
          }
         
          return "{navigation.navigate('Dashboard')}";   }, [response] );
    console.log(request);
    console.log(response);
 
    // () => {
    //     return "{navigation.navigate('Dashboard')}";
    //    }
     
      return (
        <Button
        disabled={!request}
        title="Login"
        onPress={() => {
         
          promptAsync();


          }}
      />
    );
}

export default Auth;