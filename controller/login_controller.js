"use strict"

var redis = require("redis")

var db = redis.createClient(6378,"127.0.0.1")
 
db.on("error", function (err) {
    console.log("Error " + err);
});
 
db.on("connect", runSample);
 
function runSample() {
    // Set a value
    client.set("string key", "Hello World", function (err, reply) {
        console.log(reply.toString());
    });
    // Get a value
    client.get("string key", function (err, reply) {
        console.log(reply.toString());
    });
}