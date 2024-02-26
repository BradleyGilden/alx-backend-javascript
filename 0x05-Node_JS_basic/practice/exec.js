// spawn is used to initiate a child process
const cp = require('child_process');

const cmd = {
  ls: 'ls',
  cp: 'cp',
  rm: 'rm',
};

// eslint-disable-next-line no-unused-vars
cp.exec(`${cmd.rm} -r css`, (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(stdout);
  }
});
