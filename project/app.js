const fs = require("fs/promises");
(async () => {
  const watcher = fs.watch("./");
  for await (const event of watcher) {
    if (event.eventType === "change" && event.filename === "command.txt") {
      // the file was changed...
      console.log("The file was changed");
    }
  }
})();
