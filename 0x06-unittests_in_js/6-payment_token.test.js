const { it, describe } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('validates that a promise is resolve with the correct data', (done) => {
    const promise = getPaymentTokenFromAPI(true);
    promise.then((data) => {
      expect(data.data).to.equal('Successful response from the API');
      done()
    })
  });
});
