import React, { useState, useEffect } from 'react';
import { Platform, ScrollView } from 'react-native';

import api from '~/services';

import Text from '~/components/Text';
import Loading from '~/components/Loading';

import Header from '~/components/Header';
import { IContatoProps } from '~/pages/Home';

import { Container, InputArea, Input, AreaIconSave, IconSave } from './styles';

const Details: React.FC = ({ route: { params } }) => {
  const { id }: IContatoProps = params.item;
  const [isEditable, setIsEditable] = useState(params.edit);
  const [newPhone, setNewPhone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [contato, setContato] = useState<IContatoProps>({
    id: 0,
    idade: '0',
    nome: '',
    telefones: [{ id: 1, telefone: '', contato_id: 0 }],
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const resp = await api.get(`/contato/${id}`);

      if (resp.data.telefones.length === 0) {
        resp.data.telefones = [{ save: false }];
      } else {
        resp.data.telefones.map((item) => (item.save = true));
      }
      setContato(resp.data);
      setLoading(false);
    } catch (error) {
      alert('Encontramos um erro para encontrar este usuário');
    }
  }

  function handleNewPhone() {
    contato.telefones.push({ save: false });
    setNewPhone(true);
  }

  function handleDelPhone(idPhone: number | undefined) {
    api.delete(`telefone/${idPhone}`);
    setLoading(true);
    getData();
  }

  function handleSavePhone(phone: string) {
    api.post('telefone', { contato_id: id, telefone: phone });
    setNewPhone(false);
    getData();
  }

  function onChange() {}

  function handleEditPhone() {
    console.log('entrei');
  }

  function handleSaveContato() {}

  return (
    <Container>
      <Header title="Detalhes" />
      {loading && <Loading />}
      {!loading && (
        <ScrollView>
          <InputArea>
            <AreaIconSave>
              <IconSave name="save" onPress={handleSaveContato} />
            </AreaIconSave>
            <Text>Detalhes do contato</Text>
            <Input
              label="Nome:"
              defaultValue={contato.nome}
              enabled={isEditable}
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
                  onChange={onChange}
                />
              );
            })}
          </InputArea>
        </ScrollView>
      )}
    </Container>
  );
};

export default Details;
