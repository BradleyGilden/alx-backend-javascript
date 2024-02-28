const { expect } = require('chai');
const {it, describe} = require('mocha');
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum of a and b if they are integers', () => {
    expect(calculateNumber('SUM', 2, 4)).to.equal(6);
  });

  it('should ceil numbers .5 and above', () => {
    expect(calculateNumber('SUM', 2.5, 4)).to.equal(7);
  });

  it('should ceil negtive numbers .5 and above', () => {
    expect(calculateNumber('SUM', -2.91, -4)).to.equal(-7);
  });

  it('should floor numbers .5 and below', () => {
    expect(calculateNumber('SUM', 5.45, 4)).to.equal(9);
  });

  it('should floor negative numbers .5 and below', () => {
    expect(calculateNumber('SUM', -5.01, -4)).to.equal(-9);
  });

  it('should be a whole number when adding two flaoting points', () => {
    expect(calculateNumber('SUM', 1.20, 2.31)).to.equal(3);
  });

  it('should return the correct sub of a and b if they are integers', () => {
    expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
  });

  it('should ceil numbers .5 and above', () => {
    expect(calculateNumber('SUBTRACT', 2.5, 4)).to.equal(-1);
  });

  it('should ceil negtive numbers .5 and above', () => {
    expect(calculateNumber('SUBTRACT', -2.91, -4)).to.equal(1);
  });

  it('should floor numbers .5 and below', () => {
    expect(calculateNumber('SUBTRACT', 5.45, 4)).to.equal(1);
  });

  it('should floor negative numbers .5 and below', () => {
    expect(calculateNumber('SUBTRACT', -5.01, -4)).to.equal(-1);
  });

  it('should be a whole number when adding two flaoting points', () => {
    expect(calculateNumber('SUBTRACT', 1.20, 2.31)).to.equal(-1);
  });

  it('should divide 2 whole numbers correctly', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('should floor numbers .5 and below', () => {
    expect(calculateNumber('DIVIDE', 2, 4.1)).to.equal(0.5);
  });

  it('should floor numbers .5 and above', () => {
    expect(calculateNumber('DIVIDE', 4.9, 2)).to.equal(2.5);
  });

  it('should result in negative if one operand is negative', () => {
    expect(calculateNumber('DIVIDE', -4.9, 2)).to.equal(-2.5);
  });

  it('should result in positive if both operands are negtaive', () => {
    expect(calculateNumber('DIVIDE', -4.9, -2)).to.equal(2.5);
  });

  it('should be 0 if numerator is 0', () => {
    expect(calculateNumber('DIVIDE', 0, 10)).to.equal(0);
  });

  it('should return "Error" if dividend is 0', () => {
    expect(calculateNumber('DIVIDE', 4.9, 0), 'Error');
  });

  it('should return "Error" if dividend rounds to 0', () => {
    expect(calculateNumber('DIVIDE', 4.9, 0.3), 'Error');
  });
});
