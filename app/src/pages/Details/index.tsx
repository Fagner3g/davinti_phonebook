import React, { useState, useEffect } from 'react';
import { Platform, ScrollView } from 'react-native';

import Text from '~/components/Text';

import Header from '~/components/Header';
import { IContatoProps } from '~/pages/Home';

import { Container, InputArea, Input, Button } from './styles';

interface ITelefone {
  id?: number;
  contato_id?: number;
  telefone?: string;
}

const Details: React.FC = ({ route: { params } }) => {
  const { id, nome, idade, telefones }: IContatoProps = params.item;
  const [isEditable, setIsEditable] = useState(params.edit);
  const [offlinePhone, setOffilinePhone] = useState<ITelefone[]>([{}]);

  function handleStateButton() {
    setIsEditable(!isEditable);
  }

  function handleNewPhone(tel: string | undefined) {
    setOffilinePhone([
      ...offlinePhone,
      { telefone: '', contato_id: id, id: Math.floor(Math.random() * 100) },
    ]);
  }

  function handleDelPhone(id: number | undefined) {
    const filter = offlinePhone.filter((item) => item.id !== id);

    console.log(filter);
    setOffilinePhone([...filter]);
  }

  return (
    <Container>
      <Header title="Detalhes" />
      <ScrollView>
        <InputArea>
          <Text>Detalhes do contato</Text>
          <Input label="Nome:" defaultValue={nome} enabled={isEditable} />
          <Input
            label="Idade:"
            defaultValue={idade}
            enabled={isEditable}
            maxLength={3}
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
                actionIcons={true}
                actionIconPlus={handleNewPhone}
                actionIconDel={() => handleDelPhone(item.id)}
              />
            );
          })}
          {offlinePhone.map((item) => {
            return (
              <Input
                label="Telefone:"
                defaultValue={item.telefone}
                enabled={isEditable}
                type="cel-phone"
                keyboardType={
                  Platform.OS === 'android' ? 'numeric' : 'number-pad'
                }
                actionIcons={true}
                actionIconPlus={handleNewPhone}
                actionIconDel={() => handleDelPhone(item.id)}
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
      </ScrollView>
    </Container>
  );
};

export default Details;
