const mongoose = require('mongoose');

// Schema : estruturação de uma entendidade dentro do BD
const DevSchema = new mongoose.Schema( { //Objeto que define a estrutura do banco
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // entende automáticamente que deve armazenar uma ou mais strings   
});

module.exports = mongoose.model('Dev', DevSchema);