const API_URL= 'http://localhost:8000';

async function httpGetPlanets() {

  const response= await fetch(`${API_URL}/planets`);
  // Load planets and return as JSON.
  return await response.json();
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const response=await fetch(`${API_URL}/lunches`);
  const fetchedLunches=await response.json();
  return fetchedLunches.sort((a,b) =>{
    return a.flightNumber - b.flightNumber
  });
}

async function httpSubmitLaunch(launch) {
  // Submit given launch data to launch system.
  return await fetch(`$${API_URL}/lunches`,
  {
    method: 'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(launch),
  })
}

async function httpAbortLaunch(id) {

  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};