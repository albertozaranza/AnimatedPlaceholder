import React from 'react';
import {
  View,
  Text,
  TextInput as NativeTextInput,
  StyleSheet,
} from 'react-native';

const TextInput: React.FC = () => {
  const { container, label, input } = styles;

  return (
    <View style={container}>
      <Text style={label}>Label</Text>
      <NativeTextInput style={input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    position: 'absolute',
    left: 24,
    bottom: 6,
  },
  input: {
    width: '100%',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default TextInput;
