import styled from 'styled-components/native';
import ButtonBase from '~/components/Button';
import TextBase from '~/components/Text';

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
