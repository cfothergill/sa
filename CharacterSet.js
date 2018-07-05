
class CharacterSet {
  constructor(str) {
    this._characters = new Set([...str]);
  }

  get size() {
    return this._characters.size;
  }

  union(other) {
    const res = new Set(this._characters);

    for (const char of other._characters) {
      res.add(char);
    }

    return new CharacterSet(res);
  }

  difference(other) {
    const res = new Set(this._characters);

    for (const char of other._characters) {
      res.delete(char);
    }

    return new CharacterSet(res);
  }
}

CharacterSet.aToZ = new CharacterSet('abcdefghijklmnopqrstuvwxyz');

module.exports = CharacterSet;
