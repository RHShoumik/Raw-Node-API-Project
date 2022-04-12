/*
Title : Handle Request Response
Description : Handle Request and Response
Author : RHShoumik
Date : 10/04/2022
Inspired by : Sumit Saha
*/

// dependences
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object module scaffolding
const handeler = {};

// handle Request Response
handeler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parseUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello Programmers');
    });
};

module.exports = handeler;
