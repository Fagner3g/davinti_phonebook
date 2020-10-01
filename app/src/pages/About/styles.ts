import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import TextBase from '~/components/Text';

export const Container = styled.SafeAreaView`
  margin: 50px;
  align-items: center;
`;

export const AreaText = styled.View`
  margin-top: 50px;
`;

export const Title = styled(TextBase)`
  font-size: 25px;
`;
export const Subtitle = styled(TextBase)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;
export const Text = styled(TextBase)``;

export const Icon = styled(Feather)`
  font-size: 30px;
`;

export const GitButton = styled.TouchableOpacity`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 30px;
  padding: 5px;
`;

export const LinkedinButton = styled.TouchableOpacity`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 30px;
  padding: 5px;
`;
