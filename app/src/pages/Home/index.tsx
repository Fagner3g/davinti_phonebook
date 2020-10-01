import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Linking } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import api from '~/services';

import ListItem from '~/components/ListItem';

import * as S from './styles';

export interface IContatoProps {
  id: string;
  nome: string;
  idade: string;
  telefones: [
    {
      id: string;
      contato_id: string;
      telefone: string;
    }
  ];
}

interface IListContato {
  id: number;
  nome: string;
  telefone: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contatos, setContatos] = useState<IListContato[]>();
  const formRef = useRef(null);

  useEffect(() => {
    getContatos();
  }, []);

  async function getContatos() {
    await api
      .get('/contato')
      .then(({ data }) => {
        setContatos(data);
      })
      .catch((err) => {
        alert(
          'Parece que você não está conectado ao servidor ou temos um problema para encontra-lo'
        );
      });
  }

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

  function handleSubmit({ search }) {
    console.log(search);
    api.get(`/contato/${search}`).then((res) => {
      setContatos(res.data);
    });
  }

  return (
    <S.Container>
      <QuizModal />
      <S.AreaIcon>
        <S.InputArea>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <S.InputSearch
              name="search"
              icon="search"
              autoCapitalize="words"
              onKeyPress={() => formRef.current.submitForm()}
            />
          </Form>
        </S.InputArea>
        <S.IconNewContato
          name="user-plus"
          onPress={() =>
            navigation.reset({
              routes: [{ name: 'Details', params: { edit: false } }],
            })
          }
        />
      </S.AreaIcon>

      <FlatList
        data={contatos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            handleRight={() => setIsModalVisible(!isModalVisible)}
            handleLeft={() =>
              navigation.reset({
                routes: [
                  { name: 'Details', params: { id: item.id, edit: true } },
                ],
              })
            }
            onPress={() => Linking.openURL(`tel://${item.telefone}`)}
          />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.Container>
  );
};

export default Home;
