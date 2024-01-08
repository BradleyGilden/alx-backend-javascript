export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city)
    .map((student) => {
      // create a copy of the student object (since we using map and not forEach)
      const updatedStudent = { ...student };
      // get student grade object for this particular student using student id
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
      // assign corresponding grade to student , or N/A if not found
      updatedStudent.grade = newGrade === undefined || newGrade.grade === undefined ? 'N/A' : newGrade.grade;
      return updatedStudent;
    });
}
