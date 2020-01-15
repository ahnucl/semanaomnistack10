const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

// Schema : estruturação de uma entendidade dentro do BD
const DevSchema = new mongoose.Schema( { //Objeto que define a estrutura do banco
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // entende automáticamente que deve armazenar uma ou mais strings   
    location: { // passando a latitude e longitude
        type: PointSchema,
        index: '2dsphere' // índice necessário para trabalhar com geolocalização, facilita a busca
    }
});

module.exports = mongoose.model('Dev', DevSchema);