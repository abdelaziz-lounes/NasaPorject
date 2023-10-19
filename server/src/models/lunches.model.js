const launches= new Map();

let latestFlightNumber= 100;

function existLaunchWithId(launchId){
    return launches.has(launchId);
}

const launch= {
    flightNumber:100,
    mission: 'Kepler Exploration',
    rocket: 'kepler E1',
    launchDate: new Date('01/12/2024'),
    target: 'kepler-200 b',
    customers: ['AAF','DZA'],
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
        flightNumber: latestFlightNumber,
        customers: ["AAF","DZA"],
        upcoming: true,
        success: true,
    }));
}

function deleteLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming=false;
    aborted.success=false;
    return aborted;

}

module.exports={
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    deleteLaunchById,
}