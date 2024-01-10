interface Teacher {
  // readonly property
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  // optional property
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// extends Teacher interface
interface Directors extends Teacher { numberOfReports: number };

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

/// returns first letter of firstname + lastname e.g. J. Doe
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}
