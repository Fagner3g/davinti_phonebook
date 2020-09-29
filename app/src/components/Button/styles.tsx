import styled from 'styled-components/native';

interface IContainer {
  color?: string;
  fullsize?: boolean;
}
export const Container = styled.TouchableOpacity<IContainer>`
  flex-direction: row;
  background: ${({ color }) => (color ? color : '#f58220')};
  height: 50px;
  width: ${({ fullsize }) => (fullsize ? '100%' : '150px')};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<{ color?: string }>`
  font-size: 17px;
  color: ${({ color }) => (color ? color : '#F1F1F1')};
  margin: 10px;
`;
