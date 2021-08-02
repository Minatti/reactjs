import React, {useState, UseEffect} from 'react';
import styled from 'styled-components';


const InputText = styled.input`
    border: 2px solid #000;
    border-radius: 5px;
    padding: 12px;
    font-size: 12px;
    width:300px;
`;


function SearchBox(props) {

    return (

            <InputText type="text" placeholder={props.frasePadrao}/>

    );
}


export default SearchBox;