import React from 'react';

function Header(props){ // props: todos os parâmetros passados para o componente
    return <h1>{props.title}</h1> // dentro do html, sempre que se quiser inserir JS no html, usar {}
}

// Dava pra fazer:
/*
export default function Header(){
    return <h1>dasdasd</h1>
}
*/

export default Header;