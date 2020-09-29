import React, { useState } from 'react';
import { Platform } from 'react-native';

import Text from '~/components/Text';

import Header from '~/components/Header';

import { Container, InputArea, Input, Button } from './styles';

const Details: React.FC = ({ route: { params } }) => {
  const { ages, name, phone } = params.item;
  const [isEditable, setIsEditable] = useState(params.edit);

  function handleStateButton() {
    setIsEditable(!isEditable);
  }

  return (
    <Container>
      <Header title="Detalhes" />
      <InputArea>
        <Text>Detalhes do contato</Text>
        <Input label="Nome:" defaultValue={name} enabled={isEditable} />
        <Input
          label="Idade:"
          defaultValue={ages}
          enabled={isEditable}
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          type="only-numbers"
        />
        <Input
          label="Telefone:"
          defaultValue={phone}
          enabled={isEditable}
          type="cel-phone"
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
        />
        <Button
          fullsize={true}
          color={isEditable ? '#009835' : '#f58220'}
          text={isEditable ? 'Salvar' : 'Editar'}
          onPress={handleStateButton}
        />
        {isEditable && (
          <Button
            fullsize={true}
            color="#ff0000"
            text="Cancelar"
            onPress={handleStateButton}
          />
        )}
      </InputArea>
    </Container>
  );
};

export default Details;
