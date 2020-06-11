const fs = require("fs");
const events = require("events");
const ee = new events.EventEmitter();

console.time("t1");

const dirCreatedEvent = "mkdir";
const doneWriteEvent = "donewrite";

const handleMkDir = (path) => {
  fs.writeFile(path, "ewrfgtiljheroiughertiouhrtoiuehtoiueht", (err) => {
    if (err) throw err;
    ee.emit(doneWriteEvent, path);
  });
};
const handleDoneWrite = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    console.timeEnd("t1");
  });
};

ee.on(dirCreatedEvent, handleMkDir);
ee.on(doneWriteEvent, handleDoneWrite);

fs.mkdir("./newdir", (err) => {
  if (err) throw err;
  ee.emit(dirCreatedEvent, "./newdir/txt.txt");
});
console.log(__filename);
console.log(__dirname);
