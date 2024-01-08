const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // if weakMap object exists
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      let val = weakMap.get(endpoint);
      val += 1;
      weakMap.set(endpoint, val);
    }
  // if not initialise value to 1
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { queryAPI, weakMap };
