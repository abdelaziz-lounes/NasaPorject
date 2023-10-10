const lunches= new Map();

const lunch= {
    FlightNumber:100,
    mission: 'Kepler Exploration',
    rocket: 'kepler E1',
    launchDate: new Date('01/12/2024'),
    destination: 'kepler-200 b',
    customer: ['echouroq','djazairia'],
    upcoming: true,
    success: true,

}

lunches.set(lunch.FlightNumber, lunch);

function getAllLunches(){
    return Array.from(lunches.values());
}

module.exports={
    getAllLunches,
}