var rpc = require("rpc-websockets").Server;

var server = new rpc({port: 3000, host: "localhost"});

server.setAuth((l) => {
    return (l.login == "yura" && l.password == "1605")
})

server.register("sum", (params) => {
    return sum(params);
}).public();
server.register("square", (params) => {
    return square(params);
}).protected();

console.log("WebSocket server starts on localhost:3000")

function sum(params) {
    var sum = 0;
    params.forEach(elem => {
        sum += elem;
    });
    return sum;
}

function square(params) {
    if (params.length == 1) {
        return (Math.PI * params[0] * params[0]);
    }
    else if (params.length == 2) {
        return (params[0] * params[1]);
    }
}