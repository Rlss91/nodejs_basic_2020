const fs = require("fs");
const path = require("path");

const DIRNAME = "dir";
const DIRPATH = path.join(__dirname, DIRNAME);
const PATH = path.join(__dirname, DIRNAME, "txt.txt");

function initFS() {
  if (!checkPath()) fs.mkdirSync(DIRPATH);
  fs.writeFileSync(PATH, "awehufawjhbgkwejhgbkjghbkjhgb");
}

function checkPath() {
  try {
    fs.accessSync(DIRPATH, fs.constants.F_OK);
    return true;
  } catch (ex) {
    return false;
  }
}

module.exports.PATH = PATH;
module.exports.initFSSync = initFS;
