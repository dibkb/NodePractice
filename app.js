const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("foo", () => {
  console.log("Foo Event Occcured");
});
eventEmitter.emit("foo");
