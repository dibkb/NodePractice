const { Buffer } = require("buffer");
// const buffer = Buffer.alloc(10000, 0);
const unsafe = Buffer.allocUnsafe(10000);
for (let i = 0; i < unsafe.length; ++i) {
  if (unsafe[i] !== 0) {
    console.log(i, unsafe[i].toString(16));
  }
}
