import React, { useState, useEffect } from 'react';
import Animated, { Easing, Value } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { TextInput as TextInputProps } from '../types';

const DURATION = 200;

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  color = '#ccc',
  value,
  onChangeText,
}: TextInputProps) => {
  const [translateX] = useState(new Value(0));
  const [translateY] = useState(new Value(0));
  const [scale] = useState(new Value(1));
  const [focused, setFocused] = useState(false);

  const handleAnimation = (toValue: number, transform: string): number => {
    if (value !== '' && value !== undefined) {
      return toValue;
    }
    if (transform === 'scale') {
      return focused ? toValue : 1;
    }
    return focused ? toValue : 0;
  };

  const labelAnimation = [
    Animated.timing(translateX, {
      toValue: handleAnimation(-10, 'translateX'),
      duration: DURATION,
      easing: Easing.linear,
    }),
    Animated.timing(translateY, {
      toValue: handleAnimation(-36, 'translateY'),
      duration: DURATION,
      easing: Easing.linear,
    }),
    Animated.timing(scale, {
      toValue: handleAnimation(0.85, 'scale'),
      duration: DURATION,
      easing: Easing.linear,
    }),
  ];

  useEffect(() => {
    labelAnimation[0].start();
    labelAnimation[1].start();
    labelAnimation[2].start();
  }, [focused]);

  return (
    <StyledContainer>
      <StyledLabel
        style={{
          transform: [
            {
              translateX,
              translateY,
              scale,
            },
          ],
        }}>
        {placeholder}
      </StyledLabel>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        color={color}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  height: 50px;
  width: 100%;
  justify-content: center;
  margin: 11px 0;
  padding: 0 16px;
  position: relative;
`;

const StyledLabel = styled(Animated.Text)`
  font-size: 16px;
  margin-bottom: 8px;
  position: absolute;
  left: 26px;
  bottom: 7px;
`;

const StyledTextInput = styled.TextInput<TextInputProps>`
  width: 100%;
  padding: 8px;
  color: #000;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ color }) => color};
`;

export default TextInput;
