const {getAllLunches}= require('../../models/lunches.model');

function httpGetAllLunches(req,res){
    res.status(200).json(getAllLunches());
}

module.exports={
    httpGetAllLunches,
}