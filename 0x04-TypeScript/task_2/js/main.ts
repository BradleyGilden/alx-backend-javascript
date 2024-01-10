interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

// define custom type employee as a teacher or directory
type Employee = Teacher | Director;

function createEmployee(salary: number | string): Employee {
  let adjustedSalary: number;
  if (typeof salary === 'string') {
    // remove currency symbol from string if there is one
    adjustedSalary = isNaN(salary[0] as any) ? parseInt(salary.slice(1, salary.length)): parseInt(salary);
  } else {
    adjustedSalary = salary;
  }

  return adjustedSalary < 500 ? new Teacher : new Director;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// type predicate to check for director
function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

// execute function depending on object (employee) type
function executeWork(employee: Employee): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
