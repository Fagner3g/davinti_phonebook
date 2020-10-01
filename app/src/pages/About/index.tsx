import React from 'react';

import { Linking } from 'react-native';
import {
  Container,
  Title,
  Subtitle,
  Text,
  AreaText,
  Icon,
  GitButton,
  LinkedinButton,
} from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Title>Aplicação</Title>
      <Subtitle>Davinti Phone Book</Subtitle>
      <AreaText>
        <Subtitle>
          Descrição: <Text>Agenda telefônica</Text>
        </Subtitle>
        <Subtitle>
          Autor: <Text>Fagner Gomes</Text>
        </Subtitle>
        <GitButton
          onPress={() => Linking.openURL('https://github.com/Fagner3g')}
        >
          <Icon name="github" />
          <Text>Github</Text>
        </GitButton>
        <LinkedinButton
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/fagner-gomes-83187139/'
            )
          }
        >
          <Icon name="linkedin" />
          <Text>Linkedin</Text>
        </LinkedinButton>
      </AreaText>
    </Container>
  );
};

export default About;
