import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import TextBase from '~/components/Text';

export const Container = styled.View``;

export const TextArea = styled.View<{ onFocus: boolean; enabled?: boolean }>`
  height: 50px;
  background: ${({ enabled }) => (enabled ? '#fff' : '#CCC')};
  justify-content: center;
  border-radius: 30px;
  border: 0.9px solid ${({ onFocus }) => (onFocus ? '#ddd' : 'white')};
`;

export const InputMask = styled(TextInputMask)<TextInputMaskProps>`
  margin-left: 20px;
  padding: 10px;
  font-size: 15px;
  width: 73%;
`;

export const TextInput = styled.TextInput`
  margin-left: 20px;
  padding: 10px;
  font-size: 15px;
`;

export const IconDelArea = styled.View`
  flex-direction: row;
  width: 100%;
  position: absolute;
  justify-content: flex-end;
  padding-right: 7px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 30px;
  margin: 5px;
`;

export const Label = styled(TextBase)`
  margin: 5px;
`;
