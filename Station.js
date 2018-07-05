const CharacterSet = require('./CharacterSet');

class Station {
  constructor(name) {
    this.name = name;
    this.characterSet = new CharacterSet(
      name.toLowerCase().replace(/[^a-z]/gi, '')
    );
  }
}

module.exports = Station;
