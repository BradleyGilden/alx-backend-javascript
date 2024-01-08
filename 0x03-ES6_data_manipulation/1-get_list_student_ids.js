export default function getListStudentIds(arr) {
  // return empty array if arg is not array type
  if (!Array.isArray(arr)) return [];

  // return an array of object id's
  return arr.map((obj) => obj.id);
}
