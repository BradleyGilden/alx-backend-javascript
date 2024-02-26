const fs = require('fs');

const countStudents = (path) => new Promise((resolve) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.split('\n').slice(1);
    let studentCount = 0;
    const fields = {};
    for (let row of rows) {
      row = row.trim();
      if (row) {
        const cols = row.split(',');
        const [name, field] = [cols[0], cols[3]];
        if (Object.keys(fields).includes(field)) {
          fields[field].push(name);
        } else {
          fields[field] = [name];
        }
        studentCount += 1;
      }
    }
    console.log(`Number of students: ${studentCount}`);
    for (const key of Object.keys(fields)) {
      const num = fields[key].length;
      const names = fields[key].join(', ');
      console.log(`Number of students in ${key}: ${num}. List: ${names}`);
    }
    resolve();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
});

module.exports = countStudents;
