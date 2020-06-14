var {Worker, isMainThread} = require('worker_threads');

if (isMainThread) {
    var w1 = new Worker(__filename);
    setInterval(() => {
        console.log('First');
    }, 2000);
}
else {
    setInterval(() => {
        console.log('Second');
    }, 3000);
}