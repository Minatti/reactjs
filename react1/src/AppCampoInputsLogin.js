import React, { useState } from 'react';
import styled from 'styled-components';



const Input = styled.input`
    width:200px;
    height:10px;
    font-size: 16px;
    padding:10px;
    border: 1px solid #000;
    margin-bottom: 200px;
`;




function App(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Recebo o evento 
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleButton = () => {
        alert(email+' - '+password);
    };
    return (
        <>
            <Input placeholder="Digite seu e-mail" type="email"  value={email} onChange={handleEmailInput} />
            <Input placeholder= "Digite sua senha" type="password"  value={password} onChange={handlePasswordInput} />
            <button onClick={handleButton}>Imprime</button>
        </>    
    ); 
    
}


export default App;