const {lunches}= require('../../models/lunches.model');

function getAllLunches(req,res){
    res.status(200).json(Array.from(lunches.values()));
}

module.exports={
    getAllLunches,
}