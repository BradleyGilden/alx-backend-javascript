const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum of a and b if they are integers', () => {
    assert.equal(calculateNumber('SUM', 2, 4), 6);
  });

  it('should ceil numbers .5 and above', () => {
    assert.equal(calculateNumber('SUM', 2.5, 4), 7);
  });

  it('should ceil negtive numbers .5 and above', () => {
    assert.equal(calculateNumber('SUM', -2.91, -4), -7);
  });

  it('should floor numbers .5 and below', () => {
    assert.equal(calculateNumber('SUM', 5.45, 4), 9);
  });

  it('should floor negative numbers .5 and below', () => {
    assert.equal(calculateNumber('SUM', -5.01, -4), -9);
  });

  it('should be a whole number when adding two flaoting points', () => {
    assert.equal(calculateNumber('SUM', 1.20, 2.31), 3);
  });

  it('should return the correct sub of a and b if they are integers', () => {
    assert.equal(calculateNumber('SUBTRACT', 2, 4), -2);
  });

  it('should ceil numbers .5 and above', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.5, 4), -1);
  });

  it('should ceil negtive numbers .5 and above', () => {
    assert.equal(calculateNumber('SUBTRACT', -2.91, -4), 1);
  });

  it('should floor numbers .5 and below', () => {
    assert.equal(calculateNumber('SUBTRACT', 5.45, 4), 1);
  });

  it('should floor negative numbers .5 and below', () => {
    assert.equal(calculateNumber('SUBTRACT', -5.01, -4), -1);
  });

  it('should be a whole number when adding two flaoting points', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.20, 2.31), -1);
  });

  it('should divide 2 whole numbers correctly', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });

  it('should floor numbers .5 and below', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 4.1), 0.5);
  });

  it('should floor numbers .5 and above', () => {
    assert.equal(calculateNumber('DIVIDE', 4.9, 2), 2.5);
  });

  it('should result in negative if one operand is negative', () => {
    assert.equal(calculateNumber('DIVIDE', -4.9, 2), -2.5);
  });

  it('should result in positive if both operands are negtaive', () => {
    assert.equal(calculateNumber('DIVIDE', -4.9, -2), 2.5);
  });

  it('should be 0 if numerator is 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 10), 0);
  });

  it('should return "Error" if dividend is 0', () => {
    assert.equal(calculateNumber('DIVIDE', 4.9, 0), 'Error');
  });

  it('should return "Error" if dividend rounds to 0', () => {
    assert.equal(calculateNumber('DIVIDE', 4.9, 0.3), 'Error');
  });
});
