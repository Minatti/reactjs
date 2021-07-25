import React from 'react';
import './App.css';

// Basicamente React vai funcionar com essa estrutura

function Avatar(props) {
    return (
        <div style={{backgroundColor:'#FF0505', padding:20, width:150}}>
            <img style={{width: 50, height:50}}src={props.user.url} alt={props.user.name} />
            <br/>
            <span>{props.user.name}</span>
        </div>
    );
}


function App(){
    let user = {
        url:"https://www.google.com.br/google.jpg",
        name:"Luan Carminatti"
    }
    return <>
        <Avatar user={user} />
    </>;


}


export default App;