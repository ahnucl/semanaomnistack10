const { Router } = require('express'); // importar apenas algum módulo especifico: usar { Nome_do_recurso }
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
/**
 * Rotas
 */
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index );

routes.get('/', DevController.teste);

// Exportando objeto de routes
module.exports = routes; 