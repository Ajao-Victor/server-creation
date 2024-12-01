const http = require('http');
const url = require('url')
const receivedData = require('./script2')
const { json } = require('stream/consumers');

const server = http.createServer((req,res) => {
    // console.log('header', req.headers);
    console.log('method', req.method);
    console.log('url', req.url);
    
    const myURL = 'http://localhost:4000/AJStack/?search=test&year=2024#hash'
    const myURL2 = new URL('http://localhost:4000/AJStack/?search=test&year=2024#hash')
    console.log('protocol',myURL2.protocol);
    console.log('host',myURL2.host);
    console.log('pathname',myURL2.pathname);
    console.log('search', myURL2.search);
    console.log('hash', myURL2.hash);
    
    const q = url.parse(req.url,true).query;
    const q2 = url.parse(myURL,true);
    const parsedQ2 =q2.query;
    console.log('query method' , parsedQ2);
    console.log('req.url',req.url);
   
    const text = parsedQ2.year;
 res.setHeader('content-type' , 'application/json')   
 res.write(receivedData.currentDate());
 res.write(req.url);
 res.write(text);
 res.end(JSON.stringify({
    data : 'Hello World'
 }))
});
server.listen(4000,() => {
    console.log('This server is running on http:localhost:4000/AJStack/123');
    
});
//The server.listen() function can optionally take in a second parameter
// http://localhost:4000/AJStack?search=test&year=2024#hash