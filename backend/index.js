/**
 *  URL: https://rocketseat.com.br/week-10/aulas
 *  Data: 14/01 - Até 38:59
 * 
 *  rodar `yarn install` para isntalar as dependências do projeto
 */
/**
 *  Criar variáveis com o formato de "constante", não irão mudar
 *  */ 

const express = require('express');

const app = express();

app.use(express.json()); /** o "use" se aplica a todas as requisições.
                        * Essa chamada faz o express aceitar requisições com corpo em json
                        *  */

// métodos HTTP: GET, POST, PUT, DELETE - Uso semântico dos métodos HTTP; conceito RESTFul

// Tipos de parâmetros 
// Query Params: Ficam visíveis na URL da aplicação - usualmente usados no GET (não possuí corpo)
//               acessíveis por request.query (Filtros, ordenação, paginação, etc (usos sem relação com criação, por exemplo))
// Route Params: Usados no PUT e DELETE
//               request.params (Identificar um recurso na alteração ou remoção)
// Body Params: usado no POST e no PUT
//              informações enviadas pelo "corpo" da requisição, em formato JSON


/* Isso abaixo é uma rota! */ 
app.post('/users/', (request, response) => { // Parâmetros dessa função são embutidos pelo express
    //return response.send('Hi, Frenz :)'); 
    //console.log(request.query );
    //console.log(request.params);
    console.log(request.body); // por padrão, o Express não entende JSON; Mas no response.json ele entende (?)
    return response.json({ message: 'Hi, Json D:!' }); // passar um OBJETO
});

app.listen(3333);