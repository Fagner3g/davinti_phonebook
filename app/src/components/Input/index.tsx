import React, { useState } from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';
import {
  Container,
  Icon,
  TextInput,
  Label,
  TextArea,
  InputMask,
} from './styles';

interface IInputMaskProps extends TextInputMaskProps {
  icon?: string;
  label?: string;
  style?: any;
  enabled?: boolean;
  defaultValue?: string;
  keyboardType?: any;
}

const Input: React.FC<IInputMaskProps> = ({
  icon,
  label,
  style,
  enabled,
  defaultValue,
  keyboardType,
  type,
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
      />
    );
  }

  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <TextArea onFocus={onFocus} enabled={enabled}>
        {icon && <Icon name={icon} />}
        {!type && RenderInput()}
        {type && RenderInputMask()}
      </TextArea>
    </Container>
  );
};

export default Input;
