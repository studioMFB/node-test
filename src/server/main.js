"use strict";
// import { Socket } from "node:net";
// const Socket = require("node:net");
Object.defineProperty(exports, "__esModule", { value: true });
// export const http = require('http');
// export const express = require('express');
var express_1 = require("express");
// const PORT = process.env.PORT;
var PORT = 5000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Bonjour!');
});
app.listen(PORT, function () {
    // tslint:disable-next-line:no-console
    console.log('Server started at http://localhost: ', PORT);
});
// http.createServer((req: any, res: any) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('Bonjour');
// }).listen(process.env.PORT);
// function onClientConnection(sock: Socket): void{
//     console.log(`${sock.remoteAddress}: ${sock.remotePort} connected.`);
//     sock.on('data', (data: any) =>{
//         console.log('data recieved ', data);
//         const serverRes = "Bonjour from the server!";
//         sock.write(serverRes);
//         sock.end();
//     });
//     sock.on('close', () =>{
//         console.log(`${sock.remoteAddress}: ${sock.remotePort} connection closed.`);
//     });
//     sock.on('error', (error: Error) =>{
//         console.log(`${sock.remoteAddress}: ${sock.remotePort} connection error `, error);
//     });
// }
// export default http;
