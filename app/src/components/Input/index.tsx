import React, { useState } from 'react';

import { Container, Icon, TextInput, Label, TextArea } from './styles';

interface IInputProps {
  icon?: string;
  label?: string;
  style?: any;
  enabled?: boolean;
}

const Input: React.FC<IInputProps> = ({ icon, label, style, enabled }) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <TextArea onFocus={onFocus} enabled={enabled}>
        {icon && <Icon name={icon} />}
        <TextInput
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          editable={enabled}
        />
      </TextArea>
    </Container>
  );
};

export default Input;
