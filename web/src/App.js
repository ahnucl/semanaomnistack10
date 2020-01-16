import React, {useState} from 'react';

import './global.css'; // importação do css para dentro do css
import './App.css'; // importação do css para dentro do css


function App() {



    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <label htmlFor="github_username">Usuário do Github</label>
                    <input name="github_username" id="github_username" required />
                </form>
            </aside>
            <main>
                <h2>mundo</h2>
            </main>
        </div>
    );
}

export default App;