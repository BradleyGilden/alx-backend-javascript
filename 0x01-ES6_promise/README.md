# ES6 - Promises

This directory covers the concept of promises through a series of challenges

## Tasks

* [0-promise.js](0-promise.js) - Return a Promise using this prototype function getResponseFromAPI()
* [1-promise.js](1-promise.js) - Return a Promise, if argument is false return an error else return `{ status: '200', body: 'success' }`
* [2-then.js](2-then.js) - Append three handlers to the function: When the Promise resolves, return an object with the following attributes
{status: 200, body: success}. When the Promise rejects, return an empty Error object. For every resolution, log Got a response from the API to the console
* [3-all.js](3-all.js) - In this file, import uploadPhoto and createUser from utils.js. Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
* [4-user-promise.js](4-user-promise.js) - returns a resolved promise with this object: `{ firstName: value, lastName: value }`
* [5-photo-reject.js](5-photo-reject.js) - The function should return a Promise rejecting with an Error and the string $fileName cannot be processed
* [6-final-user.js](6-final-user.js) - Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
* []() - 
* []() - 
* []() - 
