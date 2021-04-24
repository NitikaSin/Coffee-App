import React from "react";
import {Button} from "react-native-elements"

 function Dashboard({navigation}) {
  return (
      <div>This is a dashbybdsbkjfbk
           <Button
        title="Go back home"
        onPress={() => navigation.navigate('Home')}
      />
      </div>
   
  );
}


export default Dashboard;