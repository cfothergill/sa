const Station = require('./Station');

const loadStations = () => {
  return require('./stations.json')
    .map(name => new Station(name));
};

module.exports = loadStations;
