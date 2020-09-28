import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom-width: 0.2px;
`;

export const TitleArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 120px;
`;

export const Icon = styled(MaterialIcons)`
  color: #f58220;
`;
