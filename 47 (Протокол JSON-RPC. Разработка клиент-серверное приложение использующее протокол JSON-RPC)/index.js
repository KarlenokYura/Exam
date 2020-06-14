const JsonRPCServer = require('jsonrpc-server-http-nats');
const server = new JsonRPCServer();
const config = {
    host: 'localhost',
    port: 3000
};

let SquareValidator = (param, response) => {
    if(!Array.isArray(param)){
        throw new Error(`It's not Array: ` + param);
    }
    if(param.length != 2){
        throw new Error(`More then 2 params, params count: ` + param.length);
    }
    return param;
};

let CircleValidator = (param, response) => {
    if(!Number.isInteger(param)){
        throw new Error(`It's not Number: ` + param);
    }
    if(param < 0){
        throw new Error(`Number is not positive: ` + param);
    }
    return param;
};

server.on('square', SquareValidator, (params, channel, response) => {
    response(null, params.reduce((a, b) => a * b));
});

server.on('circle', CircleValidator, (param, channel, response) => {
    response(null, param * param * 3.14);

});

server.listenHttp({host: config.host, port: config.port}, () => {
    console.log(`Listening to http://${config.host}:${config.port}`);
});
