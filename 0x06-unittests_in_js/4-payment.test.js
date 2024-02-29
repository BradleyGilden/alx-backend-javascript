const { it, describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequesToApi', () => {
  describe('Utils.calculateNumber', () => {
    it('Utils.calculateNumber is called from sendPaymenRequestToApi', () => {
      const calcspy = sinon.spy(Utils, 'calculateNumber');
  
      sendPaymentRequestToApi(2, 4);
  
      sinon.assert.calledOnce(calcspy);
      sinon.assert.calledOnceWithExactly(calcspy, 'SUM', 2, 4);
  
      calcspy.restore()

    });
    it('replacing Utils.calculateNumber with a stub', () => {
      const logSpy = sinon.spy(console, 'log');
      const calcStub = sinon.stub(Utils, 'calculateNumber');
      calcStub.returns(10);

      sendPaymentRequestToApi(100, 20);

      sinon.assert.calledOnce(logSpy);
      sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 10')

      logSpy.restore();
      calcStub.restore();
    })
  });
});
