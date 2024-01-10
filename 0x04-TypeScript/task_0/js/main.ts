interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const s1: Student = {
  firstName: 'Albus',
  lastName: 'Dumbledore',
  age: 150,
  location: 'Hogwarts'
};

const s2: Student = {
  firstName: 'Mafelda',
  lastName: 'Hopkirk',
  age: 40,
  location: 'Godricks Hollow'
};

const studentsList: Student[] = [s1, s2];

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = table.createTBody();
const rowHead: HTMLTableRowElement = table.createTHead().insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);


firstCellHead.innerHTML = "first name";
secondCellHead.innerHTML = "location";

table.style.border = '2px solid black';

studentsList.forEach(student => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
    const firstCell: HTMLTableCellElement = row.insertCell(0);
    const secondCell: HTMLTableCellElement = row.insertCell(1);
    
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
  });
  
  table.append(tbody);
  body.append(table);
