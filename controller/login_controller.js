"use strict"

var redis = require("redis")

var db = redis.createClient(6378,"127.0.0.1")
 
db.on("error", function (err) {
    console.log("Error " + err);
});
 
db.on("connect", runSample);
 
function onclick() {
    console.log("We are in the OnClick");
    // Get a value
    db.get(document.getElementById("login").value;, function (err, reply) {
        console.log(reply.toString());
    });
}

document.getElementById("login_commit").onclick = onclick;