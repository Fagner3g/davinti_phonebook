import styled from 'styled-components/native';

export const Container = styled.View<{ margin?: number }>`
  margin: ${({ margin }) => (margin ? `${margin}px` : 0)};
`;
