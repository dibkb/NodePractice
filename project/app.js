const fs = require("fs/promises");
(async () => {
  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {
    //   get size of the file
    const size = (await commandFileHandler.stat()).size;
    const buff = Buffer.alloc(size);
    // location at which to start filling our buffer
    const offset = 0;
    // bytes we want to read
    const length = buff.byteLength;
    // positon that we want to start reading the file from
    const position = 0;
    // alll the content
    const content = await commandFileHandler.read(
      buff,
      offset,
      length,
      position
    );
    // console.log(content);
    const contentBuff = content.buffer;
    console.log(contentBuff.toString("utf-8"));
  });
  const watcher = fs.watch("./");
  for await (const event of watcher) {
    if (event.eventType === "change" && event.filename === "command.txt") {
      commandFileHandler.emit("change");
    }
  }
})();
