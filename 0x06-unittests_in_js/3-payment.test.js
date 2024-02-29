const { it, describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequesToApi', () => {
  describe('Utils.calculateNumber', () => {
    it('Utils.calculateNumber is called from sendPaymenRequestToApi', () => {
      const calcspy = sinon.spy(Utils, 'calculateNumber');
  
      sendPaymentRequestToApi(2, 4);
  
      sinon.assert.calledOnce(calcspy);
      sinon.assert.calledOnceWithExactly(calcspy, 'SUM', 2, 4);
  
      calcspy.restore()
    })
  })
})
