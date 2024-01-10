/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />


const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
const cTeacher: Subjects.Teacher = {
  firstName: 'Collin',
  lastName: 'Creevey',
  experienceTeachingC: 10
}
export {
  cpp,
  java,
  react,
  cTeacher
}

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);
