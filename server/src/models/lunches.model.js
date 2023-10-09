const lunches= new Map();

const lunch= {
    FlightNumber:100,
    mission: 'Kepler Exploration',
    rocket: 'kepler E1',
    launchDate: new Date('01/12/2024'),
    destinaiton: 'kepler-200 b',
    destinaiton: ['echouroq','djazairia'],
    upconming: true,
    success: true,

}

lunches.set(lunch.FlightNumber, lunch);

module.exports={
    lunches,
}