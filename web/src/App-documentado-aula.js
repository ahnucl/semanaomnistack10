import React, { useState } from 'react';

// useState -> função para manter estados

// Componente - função que retorna html ou css, etc
//    Um bloco isolado de html, css e JS o qual não interfere no restante da aplicação
// Propriedade - No HTML se chama "atributo"; passar um "atributo" para um componente = Propriedade
//    Informações que um componente PAI passa para o componente filho (como um atributo html)
// Estado - Informações mantidas pelo componente (lembrar: imutabilidade - melhora de performance)



// Trabalhando com HTML dentro do Javascript: JSX
function App() {
  
  // As funções e valores do componente são declaradas dentro do próprio componente
  // o uso de [] abaixo é um recurso ou sintaxe do JS, chamado de DESESTRUTURAÇÃO
  const [counter, setCounter] = useState(0); //argumento = valor inicial do state
                      // useState retorna um array de 2 elementos

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (  //Usar divs para container pode atrapalhar a diagramação da página porque essa div vai pro html final.
            //Usar o conceito de "fragments" no lugar
    // <div>  
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter} >Incrementar</button>
    </>
    // </div>
  );
}

export default App;
