export default function cleanSet(set, startString) {
  let endStrLen = 0;
  const resultList = [];
  // iterate the set
  set.forEach((item) => {
    // && starting avoids empty strings
    if (item.startsWith(startString) && startString) {
      // get the length of the remaining string
      endStrLen = item.length - startString.length;
      if (!(endStrLen <= 0)) {
        // push the remaining string into a list if the ending string exists
        resultList.push(item.slice(startString.length, item.length));
      }
    }
  });
  return resultList.join('-');
}
