# ES6 - Basic

This Directory covers basic ES6 syntax with the use of several challenges given by ALX

## Tasks

* [0-constants.js](0-constants.js) - Modify function `taskFirst` to instantiate variables using `const` and function `taskNext` to instantiate variables using `let`
* [1-block-scoped.js](1-block-scoped.js) - modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
* [2-arrow.js](2-arrow.js) - Rewrite the following standard function to use ES6’s arrow syntax of the function `add`
* [3-default-parameter.js](3-default-parameter.js) - modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
* [4-rest-parameter.js](4-rest-parameter.js) - Modify the following function to return the number of arguments passed to it using the rest parameter syntax
* [5-spread-operator.js](5-spread-operator.js) - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
* [6-string-interpolation.js](6-string-interpolation.js) - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
* [7-getBudgetObject.js](7-getBudgetObject.js) - Modify the following function’s budget object to simply use the keyname instead.
* [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js) - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the budget object
* [9-getFullBudget.js](9-getFullBudget.js) - modify `getFullBudgetObject` to use ES6 method properties in the fullBudget object
* [10-loops.js](10-loops.js) - Rewrite the function `appendToEachArrayValue`to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.
* [11-createEmployeesObject.js](11-createEmployeesObject.js) - Write a function named `createEmployeesObject` that will receive two arguments: departmentName (String), employees (Array of Strings)
* [12-createReportObject.js](12-createReportObject.js) - a function named `createReportObject` whose parameter `employeesList`, is the return value of the previous function `createEmployeesObject`. `createReportObject` should return an object containing the key allEmployees and a method property called `getNumberOfDepartments`. `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax. The method property receives `employeesList` and returns the number of departments
* [100-createIteratorObject.js](100-createIteratorObject.js) -  a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`. This function will return an iterator to go through every employee in every department.
* [101-iterateThroughObject.js](101-iterateThroughObject.js) - write a function named `iterateThroughObject`. The function’s parameter reportWithIterator is the return value from `createIteratorObject`. It should return every employee name in a string, separated by `|`
