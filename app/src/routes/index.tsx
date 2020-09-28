import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import Preload from '~/pages/Preload';
import Home from '~/pages/Home';
import About from '~/pages/About';
import Edit from '~/pages/Edit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function EditScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f58220',
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen name="Contatos" component={EditScreen} />
      <Tab.Screen name="Detalhes" component={About} />
    </Tab.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Routes;
