console.log('Starting notes.js');
const fs = require('fs');
module.exports.age = 25;
// var addNote = function (title, body) {
//     console.log('Adding note', title, body);
// };

var getNote = function (title) {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

var getAll = ()=>{
    console.log('Getting all notes');
}



var fetchNotes = ()=>{
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e){
        return [];
    }

}

var addNote = (title, body)=>{
    var notes = fetchNotes();
    var note= { title, body }
    var duplicateNotes = notes.filter((note)=> note.title === title);

    if (duplicateNotes.length ===0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


module.exports = {
    addNote: addNote, // yada sadece addNote yazmak yeterli
    getAll,
    getNote,
    removeNote,
    fetchNotes,
    addNote,
    saveNotes
};

module.exports.add = (a, b)=> {
    return a + b;
};



