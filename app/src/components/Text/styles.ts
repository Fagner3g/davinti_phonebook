import styled from 'styled-components/native';
import { IProps } from '.';

export const TextStyle = styled.Text<IProps>`
  color: #313131;
  font-size: ${({ size }) => (size ? size : '15px')};
`;
