import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

class App extends Component{  
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h2" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro />
      </Container>
      );
  }
}

export default App;
