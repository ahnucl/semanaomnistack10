import React, { useState , useEffect } from 'react';

import './styles.css';

function DevForm({ onSubmit }){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( // formato de callback, não no async await
            // recebe dois parâmetros, primeiro é uma função de sucesso e o segundo uma função de erro
            (position) => {
                const { latitude, longitude } = position.coords;

                /**
                 * Se fosse usar o HTML comum:
                 * document.getElementById('latitude').value = latitude;
                 * Esse é um paradigma de programação declarativa.
                 * 
                 * No React, segue-se um paradigma de programação IMPERATIVA.
                 * Cria-se um estado, e o componente deve saber se comportar a partir desse estado
                 */
                setLatitude(latitude); // Acho que ele pega pelo escopo
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {   // parâmetros para o getCurrentPosition
                timeout: 30000,
            }
        ); // função presente em todos os navegadores
            // Se rodar toda vez, quando estiver trabalhando com estados e propriedades, pode dar problemas
    }, []); // Serve para dispararmos uma função toda vez que uma informação for alterada ou apenas uma vez durante toda a aplicação
    /**
     * o primeiro argumento é qual função executar
     *
     * o segundo argumento é um array com as várias que, quando alteradas,
     * indicarão que a função deve ser executada; caso esse array seja vazio,
     * a função será executada uma única vez durante o ciclo de vida do componente
     *
     */
 
    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername(''); 
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>

    );

}

export default DevForm;