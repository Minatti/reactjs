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

    const [texto, setTexto] = useState('');

    //Recebo o evento 
    const handleInput = (e) => {
        setTexto(e.target.value);
    };
    return (
        <>
          <Input type="text" value={texto} onChange={handleInput} />
          <p>{texto}</p>
        </>
    ); 
    
}


export default App;