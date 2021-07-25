import React from 'react';
import styled from 'styled-components';
// Utilizando biblioteca do styled
// Simples e fácil de aplicar
// Usado para estrutura base do app

/* Não seria muito prático repetir o estilo existente, então estendemos o componente para reutilizar */

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

// BotaoPequeno esta recebendo o valores de botao, digamos que esta copiando
// Esta herdando...

const BotaoPequeno = styled(Botao)`
    font-size: 15px;
    padding: 5px 10px;
    color: #77FF00;
    background-color: #FFF;
    border-radius: 3px;
`;



function App(){
    return (
        <Site>
           <Botao>Clique Aqui</Botao>
           <BotaoPequeno>Clique Aqui</BotaoPequeno>
        </Site>
    );
}


export default App;