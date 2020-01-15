/**
 *  URL: https://rocketseat.com.br/week-10/aulas
 *  Data: 14/01 - Até 38:59
 *      Criando rotas
 *  A partir de 39:00
 *      Conectar ao BD
 *      Separar o projeto
 *      Separar as rotas
 *  rodar `yarn install` para isntalar as dependências do projeto
 * 
 * 
 * 
 * Todas as ferramentas que usei até agora:
 * node.js
 * chocolatey
 * yarn
 * git
 * insomnia.rest
 * express (framework js para rotas) 
 * nodemon (refresh do servidor node)
 * axios (consumir APIs)
 * 
 */

 /**
 *  Criar variáveis com o formato de "constante", não irão mudar
 *  */ 
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Caminho relativo

const app = express();

// mongoose.connect('mongodb+srv://omnistackleo:cCaAKwdxK4FIgDoa@cluster0-k6hnf.mongodb.net/week10?retryWrites=true&w=majority', {
//       useNewUrlParser: true ,
//       useUnifiedTopology: true
// });

mongoose.connect('mongodb://omnistackleo:cCaAKwdxK4FIgDoa@cluster0-shard-00-00-k6hnf.mongodb.net:27017,cluster0-shard-00-01-k6hnf.mongodb.net:27017,cluster0-shard-00-02-k6hnf.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); /** o "use" se aplica a todas as requisições.
                        * Essa chamada faz o express aceitar requisições com corpo em json
                        * precisa vir *antes* das rotas!
                        *  */
app.use(routes);

// métodos HTTP: GET, POST, PUT, DELETE - Uso semântico dos métodos HTTP; conceito RESTFul

// Tipos de parâmetros 
// Query Params: Ficam visíveis na URL da aplicação - usualmente usados no GET (não possuí corpo)
//               acessíveis por request.query (Filtros, ordenação, paginação, etc (usos sem relação com criação, por exemplo))
// Route Params: Usados no PUT e DELETE
//               request.params (Identificar um recurso na alteração ou remoção) rota/:id e apresenta um número fora de um query param (?nome=valor)
// Body Params: usado no POST e no PUT
//              informações enviadas pelo "corpo" da requisição, em formato JSON

// MongoDB (Não-relacional) : Bom quando o negócio possui poucos relacionamentos, pois os relacionamentos ficam mais complicados de escalar


/* Isso abaixo é uma rota! */ // Movido para o route.js
// app.post('/users/', (request, response) => { // Parâmetros dessa função são embutidos pelo express
//     //return response.send('Hi, Frenz :)'); 
//     //console.log(request.query );
//     //console.log(request.params);
//     console.log(request.body); // por padrão, o Express não entende JSON; Mas no response.json ele entende (?)
//     return response.json({ message: 'Hi, Json D:!' }); // passar um OBJETO
// });

// app.get('/', (arroz, feijao) => {
//     console.log(arroz.body);
//     return feijao.send("Aparentemente, qualquer nome para os parametros da arrow function funciona, desde que se saiba o que cada parâmetro em sequencia significa.");

// });


app.listen(3333);