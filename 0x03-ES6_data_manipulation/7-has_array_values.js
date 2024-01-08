export default function hasValuesFromArray(set, array) {
  // if every item in array occurs in the set return true
  if (array.every((item) => set.has(item))) return true;
  return false;
}
