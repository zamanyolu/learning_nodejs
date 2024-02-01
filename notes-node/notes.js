console.log('Starting notes.js');
const fs = require('fs');
module.exports.age = 25;
var addNote = function (title, body) {
    console.log('Adding note', title, body);
};

var getNote = function (title) {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

var getAll = ()=>{
    console.log('Getting all notes');
}


module.exports = {
    addNote: addNote, // yada sadece addNote yazmak yeterli
    getAll,
    getNote,
    removeNote
};

module.exports.add = (a, b)=> {
    return a + b;
};


