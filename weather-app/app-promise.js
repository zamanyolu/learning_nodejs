const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
var fs = require('fs');
const axios = require('axios');
const API_KEY = JSON.parse(fs.readFileSync('../API_KEY.json'));


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


var url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + API_KEY.API_KEY +
    "&address=" + address;


var res = axios.get(url)
    .then((response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }
        // console.log(response.data.results[0]);
        return response.data.results[0].geometry.location;
    }))
    .then((location) => {
        lat = location.lat;
        lon = location.lng;

        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY.openWeather_Key}`
        return axios.get(url)
            .then((res => {
                console.log('Hava durumu\n', res);
            }))
            .catch((error) => {
                if (error.code === 'ENOTFOUND')
                    console.log('Unable to connect to API servers.');
            })

    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND')
            console.log('Unable to connect to API servers.');
        else {
            console.log(error.message);
        }
    });

//
// geocode.geocodeAddress(address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(results.address);
//         weather.getWeather(results.latitude, results.longitude,
//             (errorMessage, weatherResults) => {
//                 if (errorMessage) {
//                     console.log(errorMessage);
//                 } else {
//                     console.log(JSON.stringify(weatherResults, undefined, 2));
//                 }
//             })
//     }
//
// });
//
//
// a = 5;