'use strict';
const express = require('express');
const http = require('http');
const socket = require('socket.io');

class Server {
    constructor() {
        this.port = 5000;
        this.host = "localhost";
        this.app = express();
        this.http = http.Server(this.app);
    }
    runServer() {
        this.http.listen(this.port, this.host, ()=> {
            console.log('hi developer ^_^ ');
        })
    }
}
const app = new Server();
app.runServer();
