import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    margin-bottom:10px;
`;

const Conta = styled.div`
    margin-bottom: 10px;
`;

const Input = styled.input`
    width:300px;
    height:10px;
    font-size: 16px;
    padding:10px;
    border: 1px solid #000;
`;

const Gorjeta = styled.div`
    margin-top: 10px;
    margin-bottom:12px;
`;

const Detalhes = styled.div`
    margin-top:10px;
`;


function App(){

    const [conta, setConta] = useState('');
    const [gorjeta, setGorjeta] = useState('');

    let nConta = parseFloat(conta);
    let porcentagem = (gorjeta / 100) * nConta;

    return (
        <div>
            <Header>
                <h1>Calculadora de Gorjeta</h1>
            </Header>
            <Conta>
                <label> Quanto deu a conta? </label>
            </Conta>
                <Input type="number"  value={nConta} onChange={(e)=>setConta(e.target.value)} />             
            <Gorjeta>
                <label> Qual a procentagem de gorjeta? </label>
            </Gorjeta>
                <Input type="number"  value={gorjeta} onChange={(e)=>setGorjeta(e.target.value)} />
                <hr></hr>
            <Detalhes>
                <p>
                    Sub-total: R$ {nConta} 
                </p>
                
                <p>
                    Gorjeta({gorjeta}%): R$ {porcentagem}
                </p>
                <p>
                    <strong>Total: R$ {nConta + porcentagem}</strong>
                </p>
            </Detalhes>
        </div>    
    ); 
    
}


export default App;