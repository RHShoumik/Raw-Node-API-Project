/*
Title : Uptime monitoring Application
Description : A RESTFul API monitor up or down time of user defined links
Author : RHShoumik
Date : 10/04/2022
Inspired by : Sumit Saha
*/

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {
    config: {
        port: 3000,
    },
};

// configaration
// app.config = {
//     port: 3000,
// };

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World');
};

// start the server
app.createServer();
