import React from 'react';

import {Container,Image,ContainerItens,H1,InputLabel,Input,Button} from './style';

///JSX É MISTURAR JAVASCRIPT + HTML

function App(){

const hello = "Hello React"

return(
  <Container> 
    <Image/>
    <ContainerItens>
      <H1>Olá</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder='Nome'></Input>

      <InputLabel>Idade</InputLabel>
      <Input placeholder='Idade'></Input>
      <Button>Cadastrar!</Button>
    </ContainerItens>
  
  
  </Container> 
);

}
export default App;