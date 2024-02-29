# Unittests - Mocha, Chai and Sinon

# Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* How to use Mocha to write a test suite
* How to use different assertion libraries (Node or Chai)
* How to present long test suites
* When and how to use spies
* When and how to use stubs
* What are hooks and when to use them
* Unit testing with Async functions
* How to write integration tests with a small node server

# Tasks

* ### `0-*.js` - Install Mocha using npm:

  * Set up a scripts in your package.json to quickly run Mocha using npm test
  * You have to use assert
  * Create a new file named 0-calcul.js:
  * Create a function named calculateNumber. It should accepts two arguments (number) a and b
  * The function should round a and b and return the sum of it

  * ### Test cases

    * Create a file 0-calcul.test.js that contains test cases of this function
    * You can assume a and b are always number
    * Tests should be around the “rounded” part

* ### `1-*.js` - Create a new file named 1-calcul.js:

  * Upgrade the function you created in the previous task (0-calcul.js)
  * Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
  * When type is SUM, round the two numbers, and add a and b
  * When type is SUBTRACT, round the two numbers, and subtract b from a
  * When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error

  * ### Test cases

    * Create a file 1-calcul.test.js that contains test cases of this function
    * You can assume a and b are always number
    * Usage of describe will help you to organize your test cases

* ### `2-*.js` - Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
  * Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
  * Rewrite the test suite, using expect from Chai

* ### `3-*.js && utils.js` Let’s install Sinon with npm:

  * Create a new file named utils.js
  * Create a new module named Utils
  * Create a property named calculateNumber and paste your previous code in the function
  * Export the Utils module

  * ### Create a new file named 3-payment.js:

    * Create a new function named sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
    * The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b and display in the console the message The total is: <result of the sum\>

  * ### Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:

    * By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)

* ### `4-*.js` - Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior)

  * ### Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js

    * Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
    * Stub the function Utils.calculateNumber to always return the same number 10
    * Verify that the stub is being called with type = SUM, a = 100, and b = 20
    * Add a spy to verify that console.log is logging the correct message The total is: 10

* ### `5-*.js` - Create a new file 5-payment.test.js:
  Inside the same describe, create 2 tests:
  * The first test will call sendPaymentRequestToAPI with 100, and 20:
    * Verify that the console is only called once
    * Verify that the console is logging the string The total is: 120
  * The second test will call sendPaymentRequestToAPI with 10, and 10:
    * Verify that the console is logging the string The total is: 20
    * Verify that the console is only called once

* ### `6-*.js` - Create a new file 6-payment_token.js:

  ### Create a new function named getPaymentTokenFromAPI
    * The function will take an argument called success (boolean)
    * When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
    * Otherwise, the function is doing nothing.

  ### Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI

    * How to test the result of getPaymentTokenFromAPI(true)?

* ### `7-skp.test.js` - Using the file 7-skip.test.js:

  * Make the test suite pass without fixing or removing the failing test
  * it description must stay the same
