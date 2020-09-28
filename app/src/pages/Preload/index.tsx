import React from 'react';

import Text from '~/components/Text';
import Loading from '~/components/Loading';
import { Container, Logo } from './styles';

const Preload: React.FC = () => {
  return (
    <Container>
      <Text size="20px">PhoneBook</Text>
      <Logo source={require('../../assets/image/logo-davinti.png')} />
      <Loading size="large" margin={20} />
    </Container>
  );
};

export default Preload;
