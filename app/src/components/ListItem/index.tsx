import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, TouchableOpacity } from 'react-native';

import Text from '~/components/Text';
import {
  Container,
  TextArea,
  LeftActionArea,
  TextLeft,
  RightActionArea,
} from './styles';

export interface IListItem {
  id: string;
  name: string;
  ages?: string;
  phone?: string;
}

interface IProps {
  data: IListItem;
  handleLeft: () => null;
  handleRight: () => null;
}

const ListItem: React.FC<IProps> = ({ data, handleLeft, handleRight }) => {
  const TextAnimated = Animated.createAnimatedComponent(TextLeft);

  function RenderLeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <LeftActionArea>
        <TextAnimated style={{ transform: [{ scale }] }}>Editar</TextAnimated>
      </LeftActionArea>
    );
  }

  function RenderRightActions({ progress, dragX, onPress }) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={onPress}>
        <RightActionArea>
          <TextAnimated style={{ transform: [{ scale }] }}>
            Excluir
          </TextAnimated>
        </RightActionArea>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable
      renderLeftActions={RenderLeftActions}
      onSwipeableLeftOpen={handleLeft}
      renderRightActions={(progress, dragX) => (
        <RenderRightActions
          progress={progress}
          dragX={dragX}
          onPress={handleRight}
        />
      )}
    >
      <Container>
        <TextArea>
          <Text size="17px">{data.name}</Text>
          <Text size="13px">{data.phone}</Text>
        </TextArea>
      </Container>
    </Swipeable>
  );
};

export default ListItem;
