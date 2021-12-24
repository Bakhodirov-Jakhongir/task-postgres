const http = require('http');
const db = require('./db');
require('dotenv').config()
const PORT = process.env.PORT


const server = http.createServer((req,res) => {
    const url = req.url;

    if(url === '/employee') {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({'employees':'data'}));
        res.end();
    } else if(url === '/employee/search') {
        // response body
    }
});


server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})