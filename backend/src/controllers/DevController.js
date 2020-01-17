// Controller: responsável por receber a requisição, ativar o que precisa ser feito e devolver uma resposta
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

/**
 * Verificação do proxy do Sicoob
 * v1 - Hardcode só pra continuar o estudo
 */
const estouNoSicoob = 1;
//const estouNoSicoob = 0;

if(estouNoSicoob){
    console.log("> Usando configuração para o proxy do Sicoob.");
    const HttpsProxyAgent = require('https-proxy-agent');
    const axiosDefaultConfig = {
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        proxy: false,
        httpsAgent: new HttpsProxyAgent('http://leonardo.cunha:Hebreus12@192.168.50.178:80')
    };
    var tempFun = require('axios').create(axiosDefaultConfig);
} else {
    console.log("> Sem configurações adicionais.");
    var tempFun  = require('axios');
}
const axios = tempFun; // O erro era porque eram duas definições pra uma mesma const?

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) { // Parâmetros dessa função são embutidos pelo express
    
        /**
         * Corpo de função movido pra camada de controller; aqui tem regras de negócio, logo não é legal que permaneça para sempre aqui.
         * Consultar  a arquitetura usada no node do Sicoob
         */

        const { github_username, techs, latitude, longitude} = request.body;
    
        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            // Ir até a AIP do GitHub obter os dados
            const apiResponse = await axios.get( `https://api.github.com/users/${github_username}`); // Utilizar crase para adicionar variáveis na string usando Template Strings
         
            // Assinconismo do JS, Promises... Flags async e await -> async indica que essa função (a arrow passada como parâmetro) pode demorar para executar
            // o await indica para aguardar a finalização do comando em questão para então continuar o código
        
            const { name = login, avatar_url, bio } = apiResponse.data; //Desestruturação
        
            const techsArray = parseStringAsArray(techs);
        
            const location = { // parte de localização retirada diretamente da documentação do MongoDB
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            //declaração mudada de "const" para "let", que permite dupla alteração de valor
            dev = await Dev.create({ // Javascript's short sintax
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
               
        return response.json( dev ); // passar um OBJETO
    },

    teste(arroz, feijao) {
        console.log(arroz.body);
        return feijao.send("Aparentemente, qualquer nome para os parametros da arrow function funciona, desde que se saiba o que cada parâmetro em sequencia significa.");
    }

}