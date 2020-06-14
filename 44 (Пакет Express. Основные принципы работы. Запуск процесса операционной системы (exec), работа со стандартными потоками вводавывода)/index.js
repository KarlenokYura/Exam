var exec = require('child_process').execFile;
var dir = exec('Exec', 
    {cwd: 'C:\\Users\\yury.karlianok\\Desktop\\NodeJS Экз\\Exec\\Exec\\bin\\Debug'},
    (err, stdout, stderr) => {
        if(stderr){
            console.log(`stderr: ${stderr}`);
        }
        else{
            console.log(`stdout: ${stdout}`);
        }
});

dir.stdin.write('Some line');
dir.stdin.end(); 