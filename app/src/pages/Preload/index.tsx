import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Text from '~/components/Text';
import Loading from '~/components/Loading';
import { Container, Logo } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'Home' }] });
    }, 3000);
  }, []);

  return (
    <Container>
      <Text size="20px">PhoneBook</Text>
      <Logo source={require('../../assets/image/logo-davinti.png')} />
      <Loading size="large" margin={20} />
    </Container>
  );
};

export default Preload;
