import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';


WebBrowser.maybeCompleteAuthSession();

function Auth({navigation})
{


    const [request, response, promptAsync] = Google.useAuthRequest({
      
        webClientId: '547398309122-iich8dd9qfio7olo6fscerpgnk4npg84.apps.googleusercontent.com',
        
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          navigation.navigate('Dashboard');
          }
      }, [response]);
    console.log(response);
    // () => {
    //     return "{navigation.navigate('Dashboard')}";
    //   }
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