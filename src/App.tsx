import React, { useState } from 'react';
import styled from 'styled-components/native';

import TextInput from './components/TextInput';

const App: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <StyledContainer>
      <StyledTitle>Animated Placeholder</StyledTitle>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.Text`
  margin-bottom: 48px;
  font-size: 36px;
  font-weight: bold;
`;

export default App;
