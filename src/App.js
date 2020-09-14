import React, { useState } from 'react';
import styled from 'styled-components';
import { SignupModal } from './components';

import './App.css';

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

function App(props) {
  const [showModal, setShowModal] = useState(true);
  const { setUseDarkTheme, useDarkTheme } = props;
  return (
    <Container>
      <button onClick={() => setUseDarkTheme(!useDarkTheme)}>Dark Mode</button>
      <button onClick={() => setShowModal(!showModal)}>{showModal === true ? 'Hide Modal' : 'Show Modal'}</button>
      <h1>Design Systems</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati molestias voluptatibus, adipisci nobis repudiandae consectetur quidem, autem cumque ut ex nesciunt natus nisi velit alias mollitia fugit deserunt quaerat explicabo?</p>
      <SignupModal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

export default App;
