import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, TitleArea, Title } from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Icon
        name="chevron-left"
        size={40}
        onPress={() => navigation.reset({ routes: [{ name: 'Home' }] })}
      />
      <TitleArea>
        <Title>{title}</Title>
      </TitleArea>
    </Container>
  );
};

export default Header;
