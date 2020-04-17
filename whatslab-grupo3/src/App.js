import React from 'react';
import './App.css';
import InputMensagem from './components/inputMensagem/InputMensagem'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 500px;
    display: flex;
    
    margin: 0 auto;
    border: 1px solid black;
`

function App() {
  return (
    <Container className="App">
      <InputMensagem />
    </Container>
  );
}

export default App;