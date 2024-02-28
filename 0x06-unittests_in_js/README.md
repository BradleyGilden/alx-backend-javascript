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

* `1-*.js` - Create a new file named 1-calcul.js:

  * Upgrade the function you created in the previous task (0-calcul.js)
  * Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
  * When type is SUM, round the two numbers, and add a and b
  * When type is SUBTRACT, round the two numbers, and subtract b from a
  * When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error

  * ### Test cases

    * Create a file 1-calcul.test.js that contains test cases of this function
    * You can assume a and b are always number
    * Usage of describe will help you to organize your test cases
