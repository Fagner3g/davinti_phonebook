import React from 'react';

import Text from '~/components/Text';
import Header from '~/components/Header';
import { Container } from './styles';

const Edit: React.FC = () => {
  return (
    <Container>
      <Header title="Detalhes" />
      <Text>Editar contato</Text>
    </Container>
  );
};

export default Edit;
