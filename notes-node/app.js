console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();

var res = notes.addNote();
// fs.appendFile('greetings.txt', 'Hello World', function(){});
// fs.appendFileSync('greetings.txt', 'hello world!!!');
//

console.log(_.isString(true));
console.log(_.isString('Gary'));

// fs.appendFile('greetings.txt', `Merhaba ${user.username} ve Yaş:${notes.age}`, function () {
// });


const a = 5;
