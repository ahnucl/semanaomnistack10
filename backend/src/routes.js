const { Router } = require('express'); // importar apenas algum módulo especifico: usar { Nome_do_recurso }
const axios  = require('axios');
const routes = Router();

routes.post('/devs', async (request, response) => { // Parâmetros dessa função são embutidos pelo express
    
    const { github_username } = request.body;
    
    // Ir até a AIP do GitHub obter os dados
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); // Utilizar crase para adicionar variáveis na string usando Template Strings

    // Assinconismo do JS, Promises... Flags async e await -> async indica que essa função (a arrow passada como parâmetro) pode demorar para executar
    // o await indica para aguardar a finalização do comando em questão para então continuar o código

    console.log(apiResponse.data);
    return response.json({ message: 'Hi, Json D:!' }); // passar um OBJETO
});

routes.get('/', (arroz, feijao) => {
    console.log(arroz.body);
    return feijao.send("Aparentemente, qualquer nome para os parametros da arrow function funciona, desde que se saiba o que cada parâmetro em sequencia significa.");

});

module.exports = routes; // Exportando objeto de routes