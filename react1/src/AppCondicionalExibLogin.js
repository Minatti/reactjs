import React, { useState } from 'react';
import styled from 'styled-components';



const Input = styled.input`
    width:200px;
    height:10px;
    font-size: 16px;
    padding:10px;
    border: 1px solid #000;
`;




function App(){

    const [email, setEmail] = useState('');
    //true or false;
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <Input placeholder="Digite seu e-mail" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            
            {isLogged ? <button>Sair</button> : <button>Fazer Login</button>}
  
        </>    
    ); 
    
}


export default App;