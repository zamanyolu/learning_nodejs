console.log('Starting notes.js');
const fs = require('fs');
module.exports.age = 25;
module.exports.addNote = function () {
    console.log('addNote function');
    return 'New note';
};

module.exports.add = (a, b)=> {
    return a + b;
};


