import styled from 'styled-components/native';
import InputBase from '~/components/Input';
import ButtonBase from '~/components/Button';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView``;

export const UserArea = styled.View`
  margin: 10px;
`;

export const Input = styled(InputBase)`
  margin-top: 10px;
`;

export const InputArea = styled.SafeAreaView`
  margin: 10px;
  margin-bottom: 60px;
`;

export const Button = styled(ButtonBase)`
  margin-top: 30px;
`;

export const AreaIconSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconSave = styled(MaterialIcons)`
  font-size: 30px;
  padding: 5px;
`;
