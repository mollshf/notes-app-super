const fs = require("fs");

// Membaca dari input standar (console)
const readStream = fs.createReadStream(null, {
  fd: process.stdin.fd,
  autoClose: false,
});

// Menulis ke output standar (console)
const writeStream = fs.createWriteStream(null, {
  fd: process.stdout.fd,
  autoClose: false,
});

// Meneruskan data dari input standar ke output standar
readStream.pipe(writeStream);

// Menambahkan event listener untuk menangani penutupan
readStream.on("end", () => {
  console.log("Read stream has ended.");
});

writeStream.on("finish", () => {
  console.log("Write stream has finished.");
});

// Atau, jika Anda ingin membaca dari input standar dan menuliskannya ke file
// const writeStreamToFile = fs.createWriteStream('output.txt');
// readStream.pipe(writeStreamToFile);
