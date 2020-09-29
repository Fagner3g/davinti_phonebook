import styled, { css } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextBase from '~/components/Text';

export const Container = styled.View``;

export const TextArea = styled.View<{ onFocus: boolean; enabled?: boolean }>`
  height: 50px;
  background: ${({ enabled }) => (enabled ? '#fff' : '#CCC')};
  justify-content: center;
  border-radius: 30px;
  border: 0.9px solid ${({ onFocus }) => (onFocus ? '#ddd' : 'white')};
`;

export const TextInput = styled.TextInput`
  margin-left: 20px;
  padding: 10px;
  font-size: 15px;
`;

export const Icon = styled(MaterialIcons)``;

export const Label = styled(TextBase)`
  margin: 5px;
`;
