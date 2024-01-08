const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // check for weak map object existence
  let total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, (total += 1));
  if (total >= 5) throw new Error('Endpoint load is high');
  return total;
}

export { queryAPI, weakMap };
