import styled from 'styled-components/native';
import InputBase from '~/components/Input';
import ButtonBase from '~/components/Button';

export const Container = styled.SafeAreaView``;

export const Input = styled(InputBase)`
  margin-top: 10px;
`;

export const InputArea = styled.View`
  margin: 10px;
`;

export const Button = styled(ButtonBase)`
  margin-top: 30px;
`;
