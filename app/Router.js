import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import HeaderRight from './components/HeaderRight';
import HeaderRight2 from './components/HeaderRight2';


const Stack = createStackNavigator();

export default Router = () => {


  return (

    <NavigationContainer initialRouteName="Recettes">

      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#003c62',
          headerStyle: { backgroundColor: '#f0faff' },
          headerTitleAlign: 'center',

        }}>

        <Stack.Screen
          name="Recettes"
          component={Home}
          options={{

// Boutton du Header , dirigeant vers la page ajout Recettes

            headerRight: () => <HeaderRight />,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}

        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={(

// Afficher la catégorie dans le header + Boutton du Header (Poubelle), redirigeant vers la page Home
          { route }) => ({
              title: route.params.categorie,
              headerRight: () => <HeaderRight2 />
          }

          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
