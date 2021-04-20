import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Recettes" component={Home} />
        <Stack.Screen name="Detail" component={Detail} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};