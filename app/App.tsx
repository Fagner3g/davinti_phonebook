import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import 'react-native-gesture-handler';

import Routes from '~/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
