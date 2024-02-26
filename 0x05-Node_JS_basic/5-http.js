const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const result = [];
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
    result.push('This is the list of our students');
    result.push(`Number of students: ${studentCount}`);
    for (const key of Object.keys(fields)) {
      const num = fields[key].length;
      const names = fields[key].join(', ');
      result.push(`Number of students in ${key}: ${num}. List: ${names}`);
    }
    resolve(result ? result.join('\n') : '');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
});

const app = http.createServer((req, res) => {
  const path = req.url;
  if (path === '/') {
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.end(result);
      })
      .catch((err) => {
        res.end(String(err));
      });
  }
});

app.listen(1245);

module.exports = app;
