import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { TextInput as TextInputProps } from '../types';

import usePixels from '../hooks/usePixels';

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  color = '#ccc',
}: TextInputProps) => {
  const [bottom, setBottom] = useState(7);
  const [left, setLeft] = useState(24);

  return (
    <StyledContainer>
      <StyledLabel bottom={bottom} left={left}>
        {placeholder}
      </StyledLabel>
      <StyledTextInput
        color={color}
        onFocus={() => {
          setBottom(48);
          setLeft(16);
        }}
        onBlur={() => {
          setBottom(7);
          setLeft(24);
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  height: 50px;
  width: 100%;
  justify-content: center;
  margin: 16px 0;
  padding: 0 16px;
  position: relative;
`;

const StyledLabel = styled(Animated.Text)<{ bottom: number; left: number }>`
  font-size: 16px;
  margin-bottom: 8px;
  position: absolute;
  left: ${({ left }) => usePixels(left)};
  bottom: ${({ bottom }): string => usePixels(bottom)};
`;

const StyledTextInput = styled.TextInput<{ color: string }>`
  width: 100%;
  padding: 8px;
  border-color: ${({ color }) => color};
  border-width: 1px;
`;

export default TextInput;
