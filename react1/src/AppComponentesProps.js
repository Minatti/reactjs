import React from 'react';


// Usando Componentes
function BemVindo(props){
  return <h1>Olá, {props.nome}! Vc tem {props.idade}</h1>;
}

// Conceito de Props
// Quando eu uso um componente enviando uma propriedade que é nome, é chamado de props
function App() {
  return <>
    <BemVindo nome = "Luan" idade="26" />
    <BemVindo nome = "Aline" idade="22"/>    
      </>;
}


export default App;
