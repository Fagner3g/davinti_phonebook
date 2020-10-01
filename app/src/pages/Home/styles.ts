import styled from 'styled-components/native';
import ButtonBase from '~/components/Button';
import TextBase from '~/components/Text';
import InputBase from '~/components/Input';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView``;

export const Button = styled(ButtonBase)`
  margin: 10px;
`;

export const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

export const ModalArea = styled.View`
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

export const Text = styled(TextBase)`
  text-align: center;
`;
export const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const AreaIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconNewContato = styled(Feather)`
  font-size: 26px;
  padding: 7px;
  margin: 10px;
`;

export const InputArea = styled.View`
  padding-left: 15px;
  width: 330px;
`;

export const InputSearch = styled(InputBase)``;
