const fs = require("fs");

// fs.open("inp.txt", "w+", (err, fd) => {
//   if (err) throw err;
//   fs.write(fd, "test", (err) => {
//     if (err) throw err;
//     // console.log(w, s);
//   });
// });

// fs.writeFile("inp.txt", "ewrfgtiljheroiughertiouhrtoiuehtoiueht", (err) => {
//   if (err) throw err;
//   fs.readFile("inp.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });
// });

// fs.appendFile("inp.txt", "\n23490872139485723497342", (err) => {
//   if (err) throw err;
// });

// fs.readdir(".", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.mkdir("./newdir", (err) => {
  if (err) throw err;
});

// console.log(fs.constants);
