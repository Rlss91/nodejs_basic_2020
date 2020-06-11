const events = require("events");
const ee = new events.EventEmitter();

const eventName = "some";
const eventMul = "mul";

const handleSome = (a, b) => {
  console.log("some happends");
  ee.emit(eventMul, a, b);
};
const handleSome2 = (a, b) => {
  let mul = a * b;
  console.log("the event happends " + mul);
};

ee.on(eventName, handleSome);
ee.on(eventMul, handleSome2);

ee.emit(eventName, 1, 2);
// ee.emit(eventMul, 1, 2, 3, 4);

// ee.removeListener(eventName, handleSome);

// ee.emit(eventName, 1, 2, 3, 4);
