const fs = require("fs/promises");
(async () => {
  const createFile = async (path) => {
    let fileExit;
    try {
      fileExit = await fs.open(path, "r");
      fileExit.close();
      return console.log(`The file ${path} alredy exist`);
    } catch (e) {
      console.log(e);
    }
    const newFileHandle = await fs.open(path, "w");
    console.log("New file creatred");
    newFileHandle.close();
  };
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
    const command = content.buffer.toString("utf-8");
    //   create a file
    //   🚀 <file>
    if (command.includes("🚀")) {
      const path = command.substring("🚀".length + 1);
      createFile(path);
    }
  });
  const watcher = fs.watch("./");
  for await (const event of watcher) {
    if (event.eventType === "change" && event.filename === "command.txt") {
      commandFileHandler.emit("change");
    }
  }
})();
