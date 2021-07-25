import React from 'react';
import styled from 'styled-components';
// Utilizando biblioteca do styled
// Simples e fácil de aplicar
// Usado para estrutura base do app


const Site = styled.div`
    width:400px;
    height:400px;
    background-color: #d9d9d9;
`;
const Botao = styled.button`
    color: #FF0000;
    font-size: 12px;
    background-color: ${props => props.active == true ? '#0000FF' : '#FFFb00'};
    color: ${props => props.active == true ? '#FFF' : '#000'};
`;



function App(){
    return (
        <Site>
           <Botao active = {true}>Clique Aqui</Botao>
           <Botao active = {false}>Clique Aqui</Botao>
        </Site>
    );
}


export default App;