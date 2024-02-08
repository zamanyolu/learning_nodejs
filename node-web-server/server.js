const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
        if(err){
            console.log('Unable to append data to server.log');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<p>Hello Express</p>');
    // res.send({
    //     name: 'Hakan',
    //     likes: ['Biking',
    //         'Cities']
    // });
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        WelcomeMessage: 'Sayfamıza Hoş Geldiniz'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});



app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
});







