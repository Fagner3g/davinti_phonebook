import React from 'react';

import { Container, Logo, Text } from './styles';

const Preload: React.FC = () => {
  return (
    <Container>
      <Logo source={require('../../assets/image/logo-davinti.png')} />
      <Text>Davinti PhoneBook</Text>
    </Container>
  );
};

export default Preload;
