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
  actionIconSaveActive?: boolean;
  refInput?: any;
  actionIconPlus: (text: string | undefined) => void;
  actionIconEdit: () => void;
  actionIconDel: () => void;
  onChange: () => void;
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
  actionIconSaveActive,
  actionIconPlus,
  actionIconEdit,
  actionIconDel,
  onChange,
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
        onChange={onChange}
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
        onChange={onChange}
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
            {actionIconSaveActive && (
              <Icon
                name="edit"
                color="#f58220"
                onPress={() => actionIconEdit(value)}
              />
            )}
            <Icon
              name={actionIconSaveActive ? 'add' : 'save'}
              color="#009835"
              onPress={() => actionIconPlus(value)}
            />
            <Icon
              name={actionIconSaveActive ? 'delete' : 'close'}
              color="#ff0000"
              onPress={actionIconDel}
            />
          </IconDelArea>
        )}
        {!type && RenderInput()}
        {type && RenderInputMask()}
      </TextArea>
    </Container>
  );
};

export default Input;
