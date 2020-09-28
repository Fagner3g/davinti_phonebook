import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Preload from '~/pages/Preload';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
    </Stack.Navigator>
  );
};

export default Routes;
