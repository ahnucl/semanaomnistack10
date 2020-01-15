const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {

        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({ // Filtro: passando por objeto, usando aquela sintaxe do MongoDB que deu uma olhada um dia desses..
            techs: { // Somente devs que trabalham com uma dada tecnologia
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 // em metros
                }
            }
        }); // Esse "json" ai em cima é a query
        return response.json({ devs });
    }
}