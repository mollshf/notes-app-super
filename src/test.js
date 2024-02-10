const chalk = require('chalk');
const path = require('path');

console.log(chalk.yellow(path.resolve(__dirname, 'api/uploads/file/images')));
const testSrc = `${__dirname}/api/uploads/file/images`;
console.log(chalk.yellow(testSrc));
module.exports = testSrc;
