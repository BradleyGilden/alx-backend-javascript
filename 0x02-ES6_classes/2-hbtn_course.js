export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    if (!(Array.isArray(students) && students.every((item) => typeof item === 'string'))) {
      throw new Error('TypeError: Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter methods
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Name must be a string');
    }
    return this._length;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      throw new Error('TypeError: Students must be an array of strings');
    }
    return this._students;
  }
}
