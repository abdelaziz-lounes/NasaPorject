const http = require("http");
const app = require("./app");
const mongoose= require('mongoose');
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://nasa-api:lhYB2HVmoA4yFzsT@nasacluster.1f6qmm7.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT} ...`);
  });
}

startServer();
