var app = require('express')();

var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,140,128,128,128,0,2,96,2,
    124,124,1,124,96,1,124,1,124,3,131,128,128,128,0,2,0,1,4,132,128,128,128,0,1,112,
    0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,156,128,128,128,0,3,6,109,
    101,109,111,114,121,2,0,6,115,113,117,97,114,101,0,0,6,99,105,114,99,108,101,0,1,
    10,163,128,128,128,0,2,135,128,128,128,0,0,32,0,32,1,162,11,145,128,128,128,0,0,
    32,0,32,0,162,68,31,133,235,81,184,30,9,64,162,11]);

var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, {});

app.get("/", (req, res) => {
    res.type("html").send(
        `square(10, 5) = ${wasmInstance.exports.square(10, 5)} <br/>` +
        `circle(5) = ${wasmInstance.exports.circle(5)}`
    )
});

app.listen(3000);