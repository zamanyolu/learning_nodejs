const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


var yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


address = encodeURI(argv.address);

geocode.geocodeAddress(address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude,
            (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage);
                } else {
                    console.log(JSON.stringify(weatherResults, undefined, 2));
                }
            })
    }

});


a = 5;