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
    padding: 10px 15px;
    font-size: 19px;
    border: 3px solid #FF0000;
    color: $FF0000;
    background-color: #FFF;
    margin: 5px;
    border-radius: 5px;
`;


const BotaoPequeno = styled.button`
    color: #FF0000;
    padding: 5px 10px;
    font-size: 19px;
    border: 2px solid #FF0000;
    color: $FF0000;
    background-color: #FFF;
    margin: 5px;
    border-radius: 5px;
`;



function App(){
    return (
        <Site>
           <Botao>Clique Aqui</Botao>
           <BotaoPequeno>Clique Aqui</Botao>
        </Site>
    );
}


export default App;