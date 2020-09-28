import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '~/components/ListItem';

import { Container, Separator } from './styles';

const Home: React.FC = () => {
  const contatos = [
    { id: '1', name: 'Fagner Egidio Gomes', ages: '29', phone: '31971697646' },
    { id: '2', name: 'Lucas', ages: '29', phone: '31971697646' },
    { id: '3', name: 'Fernando', ages: '29', phone: '31971697646' },
    { id: '4', name: 'Carlos', ages: '29', phone: '31971697646' },
    { id: '5', name: 'Leonardo', ages: '29', phone: '31971697646' },
  ];

  return (
    <Container>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            handleLeft={() => alert('Editando contatos')}
            handleRight={() => alert('Excluir contato')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default Home;
