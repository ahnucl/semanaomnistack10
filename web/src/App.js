import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css'; // importação do css para dentro do css
import './App.css'; // importação do css para dentro do css
import './Sidebar.css';
import './Main.css';
import './services/api';

import DevItem  from './components/DevItem'; // não precisa colocar o index, ele é pegado automaticamente
import DevForm from './components/DevForm';

function App() {
    /** Estados */
    const [devs, setDevs] = useState([]); // array vazio
   
     // Não dá pra usar async aqui
    useEffect( () => {
        async function loadDevs() {
            const response = await api.get('/devs');
            setDevs(response.data);
        }
        
        loadDevs();
    }, [] );

    async function handleAddDev(data) {
        // passada para dentro do componente DevForm
        //e.preventDefault(); // previne o comportamento padrão do form no HTML
        // O navegador possui uma api pra fazer requisições chamada "fetch", mas vamos usar a AXIOS
        
        // const response = await api.post('/devs',{
        //     github_username,
        //     techs,
        //     latitude,
        //     longitude,
        // });

        const response = await api.post('/devs', data);

        // setGithubUsername(''); // movido para DevForm
        // setTechs('');

        // como a API retorna o último dev cadastrado, basta incluir esse valor de retorno no estado de devs
        setDevs([...devs, response.data]); // sempre precisa criar a informação do zero
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev}/>
            </aside>
            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem key={dev._id} dev={dev}/>
                    ))}                    
                </ul>
            </main>
        </div>
    );
}

export default App;