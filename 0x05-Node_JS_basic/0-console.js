// a function named displayMessage that prints in STDOUT the string argument

function displayMessage(str) {
  process.stdout.write(`${str}\n`);
}

module.exports = displayMessage;
