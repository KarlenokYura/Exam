var child = require('child_process');
var fp = child.fork('fork.js');

var send = () => {
    fp.send('Hello world');
};
setInterval(send, 3000);