var rpc = require("rpc-websockets").Client;

var client = new rpc("ws://localhost:3000");

client.on("open", () => {
    client.call("sum", [2]).
    then((result) => {
        console.log("Sum(2) = ", result);
    });
    client.call("sum", [2, 4, 6, 8, 10]).
    then((result) => {
        console.log("Sum(2, 4, 6, 8, 10) = ", result);
    });

    client.login({login: "yura", password: "1605"})
    .then((login) => {
        if (login) {
            client.call("square", [3]).
            then((result) => {
                console.log("Square(3) = ", result);
            });
            client.call("square", [3, 5]).
            then((result) => {
                console.log("Square(3, 5) = ", result);
            });
        }
        else {
            console.log("Login error");
        }
    })
});
client.on("error", (err) => {
    console.log("Error: ", err);
})