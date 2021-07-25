import React from 'react';
import styled from 'styled-components';
// Utilizando biblioteca do styled
// Simples e fácil de aplicar
// Usado para estrutura base do app


const Site = styled.div`
    width:400px;
    height:400px;
    background-color: #00FF00;
`;
const Botao = styled.button`
    color: #FF0000;
    font-size: 12px;
`;



function App(){
    return (
        <Site>
           <Botao>Clique Aqui</Botao>
        </Site>
    );
}


export default App;