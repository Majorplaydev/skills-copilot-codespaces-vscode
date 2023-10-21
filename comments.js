// Create web server
// 1. Create express object
var express = require("express");
var app = express();

// 2. Create http object
var http = require("http");
var server = http.createServer(app);

// 3. Create socket.io object
var socketio = require("socket.io");
var io = socketio.listen(server);

// 4. Create mysql object
var mysql = require("mysql");
var connection = mysql.createConnection({
    user: "root",
    password: "1234",
    database: "nodejs"
});

// 5. Create server
server.listen(3000, function(){
    console.log("Server running at http://localhost:3000");
});

// 6. Create routing
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

// 7. Connect socket.io
io.sockets.on("connection", function(socket){
    // 8. Send data to client
    connection.query("SELECT * FROM comments", function(error, results, fields){
        socket.emit("show", results);
    });

    // 9. Receive data from client
    socket.on("insert", function(data){
        connection.query("INSERT INTO comments (writer, content) VALUES (?, ?)", [data.writer, data.content], function(){
            connection.query("SELECT * FROM comments", function(error, results, fields){
                io.sockets.emit("show", results);
            });
        });
    });
});