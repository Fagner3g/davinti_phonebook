import React, { useState } from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';
import {
  Container,
  Icon,
  TextInput,
  Label,
  TextArea,
  InputMask,
  IconDelArea,
} from './styles';

interface IInputMaskProps extends TextInputMaskProps {
  icon?: string;
  label?: string;
  style?: any;
  enabled?: boolean;
  defaultValue?: string;
  keyboardType?: any;
  maxLength?: number;
  actionIcons?: boolean;
  actionIconPlus: (text: string | undefined) => void;
  actionIconDel: () => void;
}

const Input: React.FC<IInputMaskProps> = ({
  icon,
  label,
  style,
  enabled,
  defaultValue,
  keyboardType,
  type,
  maxLength,
  actionIcons,
  actionIconPlus,
  actionIconDel,
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  function RenderInput() {
    return (
      <TextInput
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        editable={enabled}
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    );
  }

  function RenderInputMask() {
    return (
      <InputMask
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        editable={enabled}
        value={value}
        keyboardType={keyboardType}
        includeRawValueInChangeText={true}
        type={type}
        onChangeText={(_, rawText) => setValue(rawText)}
        maxLength={maxLength}
      />
    );
  }

  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <TextArea onFocus={onFocus} enabled={enabled}>
        {icon && <Icon name={icon} />}
        {actionIcons && (
          <IconDelArea>
            <Icon
              name="add"
              color="#009835"
              onPress={() => actionIconPlus(value)}
            />
            <Icon name="delete" color="#ff0000" onPress={actionIconDel} />
          </IconDelArea>
        )}
        {!type && RenderInput()}
        {type && RenderInputMask()}
      </TextArea>
    </Container>
  );
};

export default Input;
