const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'server/.env' });
const carsRouter = require('./routes/cars');

const server = express();
const {
  SERVER_PORT,
  MONGO_COMPASS_USER,
  MONGO_COMPASS_PASS,
  MONGO_COMPASS_CLUSTER_URL,
  MONGO_COMPASS_CLUSTER_DB
} = process.env;

// Middlewares - tarpinės procedūros gavus užklausas
server.use(cors());
server.use(morgan('tiny'));
server.use(express.json());

// Additional routes - atskiruose failuose aprašytos maršrutų apdorojimo funkcijos
server.use('/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('Serveris veikia');
});

mongoose.connect(`mongodb+srv://${MONGO_COMPASS_USER}:${MONGO_COMPASS_PASS}@${MONGO_COMPASS_CLUSTER_URL}/${MONGO_COMPASS_CLUSTER_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connected', function () {
  console.log('Connected to Database successfully!');
  server.listen(SERVER_PORT, () => {
    console.log(`Cars MERN server is running on http://localhost:${SERVER_PORT}`);
  });
});

db.on('error', (error) => console.error('ERROR: FAILED TO CONNECT TO DB:\n ' + error));

