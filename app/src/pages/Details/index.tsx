import React, { useState } from 'react';
import { Platform } from 'react-native';

import Text from '~/components/Text';

import Header from '~/components/Header';
import { IContatoProps } from '~/pages/Home';

import { Container, InputArea, Input, Button } from './styles';

const Details: React.FC = ({ route: { params } }) => {
  console.log(params);
  const { nome, idade, telefones }: IContatoProps = params.item;
  console.log(nome, idade, telefones);
  const [isEditable, setIsEditable] = useState(params.edit);

  function handleStateButton() {
    setIsEditable(!isEditable);
  }

  return (
    <Container>
      <Header title="Detalhes" />
      <InputArea>
        <Text>Detalhes do contato</Text>
        <Input label="Nome:" defaultValue={nome} enabled={isEditable} />
        <Input
          label="Idade:"
          defaultValue={idade}
          enabled={isEditable}
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          type="only-numbers"
        />
        {telefones.map((item) => {
          return (
            <Input
              label="Telefone:"
              defaultValue={item.telefone}
              enabled={isEditable}
              type="cel-phone"
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
            />
          );
        })}
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
