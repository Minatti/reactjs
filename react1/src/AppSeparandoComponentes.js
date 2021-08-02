import React, {useState, UseEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';




function App(){
    return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao = "Faça sua busca..."/>
      <SearchBox frasePadrao = "Outro de teste..."/>

    </>
    );
}


export default App;