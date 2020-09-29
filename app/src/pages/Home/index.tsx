import React, { useState } from 'react';
import { FlatList, Linking, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import ListItem from '~/components/ListItem';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const contatos = [
    { id: '1', name: 'Fagner Egidio Gomes', ages: '29', phone: '31971697646' },
    { id: '2', name: 'Lucas', ages: '29', phone: '31971697646' },
    { id: '3', name: 'Fernando', ages: '29', phone: '31971697646' },
    { id: '4', name: 'Carlos', ages: '29', phone: '31971697646' },
    { id: '5', name: 'Leonardo', ages: '29', phone: '31971697646' },
  ];

  function QuizModal() {
    return (
      <Modal isVisible={isModalVisible}>
        <S.ModalArea>
          <S.Text size="17px">
            Tem certeza que deseja excluir este contato?
          </S.Text>
          <S.ButtonArea>
            <S.Button text="Sim" color="#399e2d" onPress={() => {}} />
            <S.Button
              text="Não"
              color="#ff4c4c"
              onPress={() => setIsModalVisible(!isModalVisible)}
            />
          </S.ButtonArea>
        </S.ModalArea>
      </Modal>
    );
  }

  return (
    <S.Container>
      <QuizModal />
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            handleRight={() => setIsModalVisible(!isModalVisible)}
            handleLeft={() =>
              navigation.reset({
                routes: [{ name: 'Details', params: { item, edit: true } }],
              })
            }
            onPress={() => Linking.openURL(`tel://${item.phone}`)}
          />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.Container>
  );
};

export default Home;
