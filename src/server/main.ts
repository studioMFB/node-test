// import { Socket } from "node:net";
// const Socket = require("node:net");

// export const http = require('http');
// export const express = require('express');
import 'dotenv/config';// Needed to access ENV variables.
// import http from 'http';
// import { resolve } from 'path';
import express from 'express';


async function startServer(): Promise<void>{
    const PORT = process.env.PORT || 4000;
    // const PORT = 5000;
    
    const app = express();
    // const httpServer = http.createServer(app);

    app.get('/', (req: any, res: any)=>{
        res.send('Bonjour!');
    });
    
    app.listen(PORT, () =>{
        // tslint:disable-next-line:no-console
        console.log('Server started at http://localhost: ', PORT);
    });
    // await new Promise(() => {
    //     httpServer.listen({port: PORT}, resolve);
    // });
}

startServer();


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
