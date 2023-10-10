const lunches= new Map();

let latestFlightNumber= 100;

const lunch= {
    FlightNumber:100,
    mission: 'Kepler Exploration',
    rocket: 'kepler E1',
    launchDate: new Date('01/12/2024'),
    destination: 'kepler-200 b',
    customer: ['AAF','Djazairia'],
    upcoming: true,
    success: true,

}

lunches.set(lunch.FlightNumber, lunch);

function getAllLunches(){
    return Array.from(lunches.values());
}

function addNewLunch(lunch){
    latestFlightNumber++;
    lunches.set(latestFlightNumber, Object.assign(lunch, {
        FlightNumber: latestFlightNumber,
        customer: ['AAF','Djazairaia'],
        upcoming: true,
        success: true,
    }));
}

module.exports={
    getAllLunches,
}