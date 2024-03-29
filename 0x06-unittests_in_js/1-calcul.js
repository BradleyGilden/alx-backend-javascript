function calculateNumber(type, a, b) {
  switch(type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);

    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);

    case 'DIVIDE':
      return Math.round(b) != 0 ? Math.round(a) / Math.round(b) : 'Error';
  }
}

module.exports = calculateNumber;
