const http = require('http');
const log = console.log;

log('Hello');

http.createServer((req, res)=>{
    ('Hello server')
    res.end('api')
}).listen(3000)
