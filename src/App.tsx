import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from './components/TextInput';

const App: React.FC = () => {
  const { container, title } = styles;

  return (
    <View style={container}>
      <Text style={title}>Animated Placeholder</Text>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default App;
