import React from 'react';

import * as S from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.IconReturn />
      <S.TitleArea>
        <S.Title>{title}</S.Title>
      </S.TitleArea>
    </S.Container>
  );
};

export default Header;
