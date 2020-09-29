import React, { useState } from 'react';

import Text from '~/components/Text';

import Header from '~/components/Header';

import { Container, InputArea, Input, Button } from './styles';

const Edit: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false);

  function handleStateButton() {
    setIsEditable(!isEditable);
  }

  return (
    <Container>
      <Header title="Detalhes" />
      <InputArea>
        <Text>Detalhes do contato</Text>
        <Input label="Nome:" enabled={isEditable} />
        <Input label="Idade:" enabled={isEditable} />
        <Input label="Telefone:" enabled={isEditable} />
        <Button
          fullsize={true}
          color={isEditable ? '#009835' : '#f58220'}
          text={isEditable ? 'Salvar' : 'Editar'}
          onPress={handleStateButton}
        />
      </InputArea>
    </Container>
  );
};

export default Edit;
