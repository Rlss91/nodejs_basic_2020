const fs = require("fs");
const dir = require("./fs");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

dir.initFSSync();

const server = http.createServer((req, res) => {
  fs.readFile(dir.PATH, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Something went wrong\n");
      console.log(err);
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    }
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
