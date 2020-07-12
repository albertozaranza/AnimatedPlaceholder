import React from 'react';
import styled from 'styled-components/native';

import TextInput from './components/TextInput';

const App: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>Animated Placeholder</StyledTitle>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Password" />
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
