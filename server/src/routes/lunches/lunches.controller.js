const {getAllLaunches,addNewLaunch}= require('../../models/lunches.model');

function httpGetAllLaunches(req,res){
    res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req,res){
    const launch= req.body;
    launch.launchDate = new Date(launch.launchDate)

    if(!launch.launchDate || !launch.mission || !launch.rocket || !launch.target){
        return res.status(400).json({
            error:'missing required launch property'
        })
    }

    if(isNaN(launch.launchDate)){
        res.status(400).json({
            error: 'invalid date format'
        })
    }

    addNewLaunch(launch);
    res.status(201).json(launch);
}

function httpDeleteLaunch(){
    if(!existLaunchWithId(launchId)){
        return res.status(404).json({
            error: 'launch not found'
        })
    }
}



module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpDeleteLaunch,
    
}