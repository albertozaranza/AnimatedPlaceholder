import React from 'react';
import {
  View,
  Text,
  TextInput as NativeTextInput,
  StyleSheet,
} from 'react-native';

import { TextInput as TextInputProps } from '../types';

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  color = '#ccc',
}: TextInputProps) => {
  const { styledContainer, styledLabel, styledInput } = styles;

  const coloredInput = { ...styledInput, borderColor: color };

  return (
    <View style={styledContainer}>
      <Text style={styledLabel}>{placeholder}</Text>
      <NativeTextInput style={coloredInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  styledLabel: {
    fontSize: 16,
    marginBottom: 8,
    position: 'absolute',
    left: 24,
    bottom: 6,
  },
  styledInput: {
    width: '100%',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default TextInput;
