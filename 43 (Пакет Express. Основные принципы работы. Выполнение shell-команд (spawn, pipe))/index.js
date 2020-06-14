var spawn = require('child_process').spawn;
var dir = spawn('cmd.exe', ['/U', '/C', 'dir']);
var findstr = spawn('findstr', ['/c:in']);

dir.stdout.setEncoding('utf16le');
dir.stdout.pipe(findstr.stdin);

dir.stdout.on('data', (data) => {
    console.log(`out: ${data.toString()}`);
});

findstr.stdout.on('data', (data) => {
    console.log(`find: ${data.toString()}`);
});

dir.stderr.on('data', (data) => {
    console.log(`error: ${data.toString()}`);
});

dir.on('close', (code) => {
    console.log(`close: ${code}`);
});