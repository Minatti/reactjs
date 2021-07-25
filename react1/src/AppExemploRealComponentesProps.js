import React from 'react';


// Basicamente React vai funcionar com essa estrutura

function Avatar(props) {
    return (
        <div>
            <img src={props.user.url} alt={props.user.name} />
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