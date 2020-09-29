import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, TouchableOpacity } from 'react-native';
import { IContatoProps } from '~/pages/Home';

import Text from '~/components/Text';
import {
  Container,
  TextArea,
  LeftActionArea,
  TextLeft,
  RightActionArea,
  PhoneMask,
  Icon,
} from './styles';

interface IProps {
  data: IContatoProps;
  handleLeft: () => void;
  handleRight: () => void;
  onPress: () => void;
}

const ListItem: React.FC<IProps> = ({
  data,
  handleLeft,
  handleRight,
  onPress,
}) => {
  const TextAnimated = Animated.createAnimatedComponent(TextLeft);

  function RenderLeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <LeftActionArea>
        <TextAnimated style={{ transform: [{ scale }] }}>
          <Icon name="edit" />
        </TextAnimated>
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
            <Icon name="delete" />
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
      <Container onPress={onPress}>
        <TextArea>
          <Text size="17px">{data.nome}</Text>
          {data.telefones[0]?.telefone && (
            <PhoneMask
              value={data.telefones[0].telefone}
              type="cel-phone"
              editable={false}
            />
          )}
        </TextArea>
      </Container>
    </Swipeable>
  );
};

export default ListItem;
