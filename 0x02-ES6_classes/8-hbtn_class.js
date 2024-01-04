export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    // initiated when cast as Number()
    return this._size;
  }

  toString() {
    // initiated when cast as String()
    return this._location;
  }
}
