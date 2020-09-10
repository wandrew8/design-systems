import React from 'react';
import styled from 'styled-components';

import './App.css';

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

function App(props) {
  const { setUseDarkTheme, useDarkTheme } = props;
  return (
    <Container>
    <button onClick={() => setUseDarkTheme(!useDarkTheme)}>Dark Mode</button>
      <h1>Design Systems</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati molestias voluptatibus, adipisci nobis repudiandae consectetur quidem, autem cumque ut ex nesciunt natus nisi velit alias mollitia fugit deserunt quaerat explicabo?</p>
    </Container>
  );
}

export default App;
