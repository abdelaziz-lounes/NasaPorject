const launches= new Map();

let latestFlightNumber= 100;

function existLaunchWithId(launchId){
    launches.has(launchId);
}

const launch= {
    FlightNumber:100,
    mission: 'Kepler Exploration',
    rocket: 'kepler E1',
    launchDate: new Date('01/12/2024'),
    target: 'kepler-200 b',
    customer: ['AAF','Djazairia'],
    upcoming: true,
    success: true,

}

launches.set(launch.FlightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        FlightNumber: latestFlightNumber,
        customer: ['AAF','Djazairia'],
        upcoming: true,
        success: true,
    }));
}

function deleteLaunch(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming=false;
    aborted.success=false;
    return aborted;

}

module.exports={
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    deleteLaunch,
}