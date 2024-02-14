const express = require('express');

var app = express();
app.get('/', (req, res) => {
    // res.status(404).send('Hello wwWorld!');
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'

    })
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Hakan',
            age: 47
        },
        {
            name: 'Andrew',
            age: 25
        },
        {
            name:'Jen',
            age:26
        }]);


});


app.listen(3000);
module.exports.app = app;








