export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}

// alternate solution
// export default function cleanSet(set, startString) {
//   let endStrLen = 0;
//   const resultList = [];
//   set.forEach((item) => {
//     if (item.startsWith(startString) && startString) {
//       endStrLen = item.length - startString.length;
//       if (!(endStrLen <= 0)) {
//         resultList.push(item.slice(startString.length, item.length));
//       }
//     }
//   });
//   return resultList.join('-');
// }
