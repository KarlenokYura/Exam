var WebSocket = require("ws");

var server = new WebSocket.Server({ port: 3000});

server.on("connection", ws => {
    ws.on("message", message => {
        message = JSON.parse(message);
        if (message === "exit") {
            ws.close();
        }
        else {
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            })
        }
    })

    ws.send("On connection message");
});