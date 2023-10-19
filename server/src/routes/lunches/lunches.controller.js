const {getAllLaunches,addNewLaunch,existLaunchWithId,deleteLaunchById}= require('../../models/lunches.model');

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

function httpDeleteLaunch(req,res){
    // console.log(req);
    const launchId= Number(req.params.id);    
    console.log(launchId);
    if(!existLaunchWithId(launchId)){
        return res.status(404).json({
            error: 'launch not found'
        })
    }

    const aborted= deleteLaunchById(launchId);
    res.status(200).json(aborted);

}



module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpDeleteLaunch,
    
}