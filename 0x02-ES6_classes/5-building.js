export default class Building {
  constructor(sqft) {
    // only apply checks for classes that are not the Abstract class
    if (this.constructor.name !== 'Building'
    && (this.evacuationWarningMessage === undefined || typeof this.evacuationWarningMessage !== 'function')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
