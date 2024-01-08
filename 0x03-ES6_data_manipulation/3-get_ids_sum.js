export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumlator, currentValue) => accumlator + currentValue.id, 0);
}
