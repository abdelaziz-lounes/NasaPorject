const {getAllLaunches,addNewLaunch}= require('../../models/lunches.model');

function httpGetAllLaunches(req,res){
    res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req,res){
    const launch= req.body;
    launch.launchDate = new Date(launch.launchDate)
    addNewLaunch(launch);

    res.status(201).json(launch);
}

module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
}