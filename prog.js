let confi = 0;
process.on("beforeExit", (err) => {
  console.log("beforeExit");
});
process.on("exit", (err) => {
  console.log("exit");
});
process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err);
  process.exit(1);
});
process.on("SIGINT", () => {
  if (confi++ == 0) console.log("do you try to close the server?");
  else process.exit();
});
// while (1);
// throw "test";
console.log(process.env.PORT);
setTimeout(() => {
  console.log("here");
}, 50000);
