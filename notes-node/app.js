console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

var user = os.userInfo();

// var command = process.argv[2];
const argv = yargs.argv;
var command = argv._[0];


if (command == 'add') {
    console.log('Adding new note');
    note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
}else if (command == 'list') {
    notes.getAll();
}else if (command == 'read') {
    // notes.getNote(argv.title);
    var nts = notes.fetchNotes();
    console.log('notlar:\n', nts);

}else if (command == 'remove') {
    notes.removeNote(argv.title);
}else {
    console.log('Command not recognized');
}



// var res = notes.addNote();
// fs.appendFile('greetings.txt', 'Hello World', function(){});
// fs.appendFileSync('greetings.txt', 'hello world!!!');
//
// console.log(_.isString(true));
// console.log(_.isString('Gary'));
// var filteredArray = _.uniq(['Mike']);


// fs.appendFile('greetings.txt', `Merhaba ${user.username} ve Yaş:${notes.age}`, function () {
// });


const a = 5;
