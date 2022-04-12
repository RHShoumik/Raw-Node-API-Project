/*
Title : Uptime monitoring Application
Description : A RESTFul API monitor up or down time of user defined links
Author : RHShoumik
Date : 10/04/2022
Inspired by : Sumit Saha
*/

// dependencies
const http = require('http');
const url = require('url');

// app object - module scaffolding
const app = {};

// configaration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parseUrl.query;
    const headerObject = req.headers;
    console.log(headerObject);
    // response handle
    res.end('Hello Programmers');
};

// start the server
app.createServer();
