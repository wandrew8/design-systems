import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

function App() {
  return (
    <Container>
      <h1>Design Systems</h1>
    </Container>
  );
}

export default App;
