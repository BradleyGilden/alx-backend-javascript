// spawn is used to initiate a child process
const cp = require('child_process');

const cmd = {
  ls: 'ls',
  cp: 'cp',
  mkdir: 'mkdir',
};

const child = cp.spawn(cmd.ls, ['-l'], { cwd: '..' });
// invalid option
const child2 = cp.spawn(cmd.ls, ['slff']);

// when data appears on the stdout stream (event), then print it
child.stdout.on('data', (data) => {
  console.log(String(data));
});

child2.stderr.on('data', (data) => {
  console.log(String(data));
});

child2.on('close', (code) => {
  console.log(`status code ${code}`);
});
