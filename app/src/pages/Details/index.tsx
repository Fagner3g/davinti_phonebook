import React, { useState, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Scope } from '@unform/core';
import { Form } from '@unform/mobile';

import api from '~/services';

import Text from '~/components/Text';
import Loading from '~/components/Loading';

import Header from '~/components/Header';
import { IContatoProps } from '~/pages/Home';

import {
  Container,
  UserArea,
  Input,
  AreaIconSave,
  IconSave,
  InputPhoneArea,
  IconPhonePlus,
  IconArea,
} from './styles';

const Details: React.FC = ({ route: { params } }) => {
  const [contato, setContato] = useState<IContatoProps>({
    telefones: [{ id: '1' }],
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (params.edit) getData();
  }, []);

  async function getData() {
    try {
      const resp = await api.get(`/contato/${params.id}`);

      // Conversão para string necessária para inputs não aceitarem inteiro.
      resp.data.idade = `${resp.data.idade}`;
      resp.data.telefones.map((item) => (item.id = item.id.toString()));

      setContato(resp.data);
      setLoading(false);

      formRef.current.setData(resp.data);
    } catch (error) {
      alert('Encontramos um erro para encontrar este usuário');
    }
  }

  function handleNewPhone() {
    setContato({
      ...contato,
      telefones: [
        ...contato.telefones,
        { contato_id: 'temp', telefone: '', id: '0', save: false },
      ],
    });
  }

  async function handleSaveContato({ nome, idade, telefones }: any) {
    if (nome && idade) {
      setLoading(true);
      if (params.edit) {
        await api.put(`/contato/${contato.id}`, {
          nome,
          idade,
          telefones,
        });
      } else {
        await api.post('/contato', { nome, idade, telefones });
      }

      setLoading(false);
      navigation.reset({ routes: [{ name: 'Home' }] });
    } else {
      alert('Nome é idade são obrigatórios');
    }
  }

  async function handleDelContato() {
    setLoading(true);
    await api.delete(`/contato/${contato.id}`);
    setLoading(false);
    navigation.reset({ routes: [{ name: 'Home' }] });
  }

  return (
    <Container>
      <Header title={params.edit ? 'Editar' : 'Novo Contato'} />
      {loading && <Loading />}
      {!loading && (
        <ScrollView>
          <UserArea>
            <Form onSubmit={handleSaveContato} ref={formRef}>
              <AreaIconSave>
                <Text>
                  {params.edit ? 'Editar contato' : 'Preencha os campos'}
                </Text>
                <AreaIconSave>
                  {params.edit && (
                    <IconSave name={'delete'} onPress={handleDelContato} />
                  )}
                  <IconSave
                    name={'save'}
                    onPress={() => formRef.current.submitForm()}
                  />
                </AreaIconSave>
              </AreaIconSave>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                name="nome"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                maxLength={100}
              />
              <Input
                autoCapitalize="words"
                name="idade"
                icon="award"
                placeholder="Idade"
                returnKeyType="next"
                keyboardType="numeric"
                maxLength={3}
              />
              {contato.telefones &&
                contato.telefones.map((item, index) => {
                  return (
                    <Scope path={`telefones[${index}]`}>
                      <InputPhoneArea>
                        <Input
                          key={item.id}
                          ref={inputRef}
                          autoCapitalize="words"
                          name={`telefone`}
                          icon="phone"
                          defaultValue={item.telefone}
                          placeholder="telefone"
                          returnKeyType="next"
                          keyboardType="numeric"
                          maxLength={16}
                        />
                        <IconArea>
                          <IconPhonePlus name="add" onPress={handleNewPhone} />
                        </IconArea>
                        {params.edit && <Input key={item.id + 1} name="id" />}
                      </InputPhoneArea>
                    </Scope>
                  );
                })}
            </Form>
          </UserArea>
        </ScrollView>
      )}
    </Container>
  );
};

export default Details;
