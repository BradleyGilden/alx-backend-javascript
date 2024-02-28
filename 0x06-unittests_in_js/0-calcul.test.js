const { assert } = require('chai');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum of a and b if they are integers', () => {
    assert.equal(calculateNumber(2, 4), 6);
  });

  it('should ceil numbers .5 and above', () => {
    assert.equal(calculateNumber(2.5, 4), 7);
  });

  it('should ceil negtive numbers .5 and above', () => {
    assert.equal(calculateNumber(-2.91, -4), -7);
  });

  it('should floor numbers .5 and below', () => {
    assert.equal(calculateNumber(5.45, 4), 9);
  });

  it('should floor negative numbers .5 and below', () => {
    assert.equal(calculateNumber(-5.01, -4), -9);
  });

  it('should be a whole number when adding two flaoting points', () => {
    assert.equal(calculateNumber(1.20, 2.31), 3);
  });
});
