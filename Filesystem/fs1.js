const fs = require("fs/promises");
// const content = fs.readFileSync(`${__dirname}//file.txt`);
// console.log(content);
(async () => {
  try {
    await fs.copyFile(
      `${__dirname}//file.txt`,
      `${__dirname}//copied-file.txt`
    );
  } catch (err) {
    console.log(err);
  }
})();
