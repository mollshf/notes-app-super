// const fs = require('fs');

const InvariantError = require('./src/exception/InvariantError');
const NotFoundError = require('./src/exception/NotFoundError');

// // Membaca dari input standar (console)
// const readStream = fs.createReadStream(null, {
//   fd: process.stdin.fd,
//   autoClose: false,
// });

// // Menulis ke output standar (console)
// const writeStream = fs.createWriteStream(null, {
//   fd: process.stdout.fd,
//   autoClose: false,
// });

// // Meneruskan data dari input standar ke output standar
// readStream.pipe(writeStream);

// // Menambahkan event listener untuk menangani penutupan
// readStream.on('end', () => {
//   console.log('Read stream has ended.');
// });

// writeStream.on('finish', () => {
//   console.log('Write stream has finished.');
// });

// // Atau, jika Anda ingin membaca dari input standar dan menuliskannya ke file
// // const writeStreamToFile = fs.createWriteStream('output.txt');
// // readStream.pipe(writeStreamToFile);

// const data = [{ a: 1, b: 2 }];
// const a = {
//   ...data[0],
//   yo: 1,
// };

// console.log(a);

// function a(b) {
//   const c = b;
//   return c;
// }

// console.log(a(1));
try {
  throw new InvariantError('ini invariantError');
  // throw new NotFoundError('ini notFoundError');
} catch (err) {
  if (err instanceof NotFoundError) {
    throw err;
  }

  try {
    console.log(a);
  } catch {
    throw err;
  }
}
