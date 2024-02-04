// console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('loadsh');
const yargs = require('yargs');

const notes = require('./notes.js');

var user = os.userInfo();


const titleOptions =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};


const bodyOptions ={
    describe: 'Body of note',
    demand: true,
    alias : 'b'
};


const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body:bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
        title:titleOptions
    })
    .command('remove', 'Remove a note',{
        title:titleOptions
    })
    .help()
    .argv;


var command = process.argv[2];
// const argv = yargs.argv;
// var command = argv._[0];


if (command === 'add') {
    console.log('Adding new note');
    note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created');
        notes.logNote(note);

    } else {
        console.log('Note title taken');
    }
}else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));

}else if (command == 'read') {
    // notes.getNote(argv.title);
    // var nts = notes.fetchNotes();
    // console.log('notlar:\n', nts);
    var note = note.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? "Note was removed" : 'Note not found';
    console.log(message);
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
