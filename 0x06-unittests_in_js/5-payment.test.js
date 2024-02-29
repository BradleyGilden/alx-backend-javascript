const { it, describe, beforeEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequesToApi', () => {
  describe('Utils.calculateNumber', () => {
    let logSpy;

    beforeEach(() => {
      logSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
      logSpy.restore()
    });

    it('Verifies 100 + 20 is 120', () => {
      sendPaymentRequestToApi(100, 20);
      
      sinon.assert.calledOnce(logSpy);
      sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 120')
    })

    it('Verifies 10 + 10 is 20', () => {
      sendPaymentRequestToApi(10, 10);

      sinon.assert.calledOnce(logSpy);
      sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 20')

    });
  });
});
