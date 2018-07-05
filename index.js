const Station = require('./Station');
const CharacterSet = require('./CharacterSet');
const loadStations = require('./loadStations');

const run = () => {
  let stations = loadStations();
  let found = new CharacterSet('');
  let res = [];

  while (CharacterSet.aToZ.difference(found).size > 0) {
    const mostEffectiveIdx = findMostEffectiveStationIdx(stations, found);
    const station = stations[mostEffectiveIdx];

    found = found.union(station.characterSet);
    res = [...res, ...stations.splice(mostEffectiveIdx, 1)];
  }

  return res;
};

const findMostEffectiveStationIdx = (stations, found) => {
  const calculateIncrease = ({ characterSet }) =>
    found.union(characterSet).size - found.size;

  let largestIncrease = calculateIncrease(stations[0]);
  let largestIdx = 0;

  for (const [idx, station] of stations.entries()) {
    const increase = calculateIncrease(station);

    if (increase > largestIncrease) {
      largestIncrease = increase;
      largestIdx = idx;
    }
  }

  return largestIdx;
};

const res = run().map(s => s.name).join(', ');
console.log(`minimum subset = ${res}`);
