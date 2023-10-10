const {getAllPlanets} = require('../../models/planets.model')

function httpGetAllPlanets(req,res){
    return res.json(planets);
}

module.exports={
    httpGetAllPlanets,
}