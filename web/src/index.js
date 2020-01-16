import React from 'react'; // Sempre existe
import ReactDOM from 'react-dom'; // Varia de acordo com o ambiente
import App from './App'; // Arquivo criado no próprio projeto

ReactDOM.render(<App />, document.getElementById('root'));

/**
 *  Sempre que se usa HTML no Javascript (JSX) deve-se importar o React. O termo "<App />" acima é uma tag HTML.
 *  O arquivo App.js represnta a tag acima.
 * 
 *  ReactDOM é o que permite ao React se comunicar com a árvore de elementos da apicação (DOM)
 *  O React pode ser utilizado em outros tipos de projetos, e o ReactDOM é substituido de acordo; por exemplo, no mobile, 
 * o ReactDOM é substituido pelo ReactNative.
 *  Outras aplicações: React pode ser usado para realidade virtual e Televisão o_o (ReactTV)
 */
// JSX -> Jacasript + HTML (XML - sintaxe do HTML)
