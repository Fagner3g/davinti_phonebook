import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.TouchableOpacity`
  background: #fff;
  padding: 15px 20px;
  min-height: 70px;
`;

export const TextArea = styled.View``;

export const LeftActionArea = styled.View`
  flex: 1;
  justify-content: center;
  background: #f58220;
`;

export const RightActionArea = styled.View`
  background: #ff0000;
  justify-content: center;
  height: 100%;
`;

export const TextLeft = styled.Text`
  color: #fff;
  padding: 20px;
  font-size: 17px;
`;

export const PhoneMask = styled(TextInputMask)`
  margin-top: 3px;
  padding: 0px;
  font-size: 13px;
  color: #999;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 40px;
`;
