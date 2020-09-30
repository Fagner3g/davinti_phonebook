import React, { useState, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '~/services';

import Text from '~/components/Text';
import Loading from '~/components/Loading';

import Header from '~/components/Header';
import { IContatoProps } from '~/pages/Home';

import { Container, UserArea, Input, AreaIconSave, IconSave } from './styles';

const Details: React.FC = ({ route: { params } }) => {
  const [contato, setContato] = useState<IContatoProps>({});
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (params.edit) getData();
  }, []);

  async function getData() {
    try {
      const resp = await api.get(`/contato/${params.id}`);
      if (resp.data.telefones.length === 0) {
        resp.data.telefones = [{ save: false }];
      } else {
        resp.data.telefones.map((item: any) => (item.save = true));
      }
      resp.data.idade = `${resp.data.idade}`;
      setContato(resp.data);
      setLoading(false);
    } catch (error) {
      alert('Encontramos um erro para encontrar este usuário');
    }
  }

  function handleNewPhone() {
    contato.telefones.push({ save: false });
  }

  function handleDelPhone(idPhone: number | undefined) {
    api.delete(`telefone/${idPhone}`);
    setLoading(true);
    getData();
  }

  function handleSavePhone(phone: string) {
    api.post('telefone', { contato_id: id, telefone: phone });
    getData();
  }

  function onChange() {}

  function handleEditPhone() {
    console.log('entrei');
  }

  async function handleSaveContato({ nome, idade }: any) {
    if (nome && idade) {
      setLoading(true);
      await api.post('/contato', { nome, idade });
      setLoading(false);
      navigation.reset({ routes: [{ name: 'Home' }] });
    } else {
      console.log(nome, idade);
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
      <Header title={params.edit ? 'Detalhes' : 'Novo Contato'} />
      {loading && <Loading />}
      {!loading && (
        <ScrollView>
          <UserArea>
            <Form
              onSubmit={handleSaveContato}
              initialData={contato}
              ref={formRef}
            >
              <AreaIconSave>
                <Text>
                  {params.edit ? 'Detalhes do contato' : 'Preencha os campos'}
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
            </Form>
          </UserArea>

          {/* <InputArea>
            {
              <AreaIconSave>
                <IconSave
                  name={isEditable ? 'save' : 'edit'}
                  onPress={handleSaveContato}
                />
              </AreaIconSave>
            }
            <Text>Detalhes do contato</Text>
            <Input
              label="Nome:"
              defaultValue={contato.nome}
              enabled={isEditable}
              onChangeText={(text) => setNome(text)}
              onChange={onChange}
            />
            <Input
              label="Idade:"
              defaultValue={contato.idade}
              enabled={isEditable}
              maxLength={3}
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
              type="only-numbers"
              onChangeText={(text) => setIdade(text)}
              onChange={onChange}
            />
            {contato.telefones.map((item) => {
              return (
                <Input
                  key={item.id}
                  label="Telefone:"
                  defaultValue={item.telefone}
                  enabled={!item.save}
                  type="cel-phone"
                  keyboardType={
                    Platform.OS === 'android' ? 'numeric' : 'number-pad'
                  }
                  actionIcons={true}
                  actionIconPlus={newPhone ? handleSavePhone : handleNewPhone}
                  actionIconDel={() => handleDelPhone(item.id)}
                  actionIconEdit={handleEditPhone}
                  actionIconSaveActive={item.save}
                />
              );
            })}
          </InputArea> */}
        </ScrollView>
      )}
    </Container>
  );
};

export default Details;
