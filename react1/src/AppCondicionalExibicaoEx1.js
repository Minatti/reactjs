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

    return (
        <>
            <Input placeholder="Digite seu e-mail" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            
            { email.length > 0 && 
            
                <p>{email.length} caractere{email.length != 1 ? 's' : ''}</p>
            }

        </>    
    ); 
    
}


export default App;