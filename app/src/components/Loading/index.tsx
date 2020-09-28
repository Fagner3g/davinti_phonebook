import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

interface IProps {
  size?: 'large' | 'small';
  color?: string;
  margin?: number;
}

const Loading: React.FC<IProps> = ({ size, color, margin }) => {
  return (
    <Container margin={margin}>
      <ActivityIndicator size={size} color={color ? color : '#f58220'} />
    </Container>
  );
};

export default Loading;
