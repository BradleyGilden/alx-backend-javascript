export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array) {
      arr.push(appendString.concat(value))
  }
  return arr
}
