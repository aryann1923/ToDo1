import React from "react";
import *as Screens from "../Screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from "./navigationStrings";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={navigationStrings.NODATA} component={Screens.Nodata} options={{headerShown:false}} />
        <Stack.Screen name={navigationStrings.ADDTODO} component={Screens.AddToDo} options={{headerShown:false}} />
      <Stack.Screen name={navigationStrings.TODO} component={Screens.Todo} options={{headerShown:false}} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
