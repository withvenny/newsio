import React from "react";

import { Image } from 'react-native'; 
import { createStackNavigator } from "@react-navigation/stack";

import NestedScreen from "@screens/NestedScreen";
import Screen1 from "@screens/Screen1";
import Screen2 from "@screens/Screen2";
import Screen3 from "@screens/Screen3";

const Stack = createStackNavigator();

function ActionBarIcon() {
  return (
    <Image
    source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }} />
  );
}

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator >
       <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerTitle: 'Home Activity', 
        headerLeft : props => <ActionBarIcon {...props} /> }} 
      />
       <Stack.Screen
        name="NestedScreen"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Screen2"
            component={Screen2}
        />
         <Stack.Screen
          name="NestedScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {SecondScreenNavigator};

  const ThirdScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Screen3"
            component={Screen3}
        />
         <Stack.Screen
          name="NestedScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {ThirdScreenNavigator};