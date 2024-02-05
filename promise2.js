const request = require("./weather-app/node_modules/request");
var fs = require('fs');
const API_KEY = JSON.parse(fs.readFileSync('./API_KEY.json'));
const openWeatherKey = API_KEY.openWeather_Key;

// url = "https://maps.googleapis.com/maps/api/js?sensor=false"

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + API_KEY.API_KEY +
            "&address=" + address;
        request({url: url, json: true}, function (error, response, body) {
            if (error)
                reject('Unable to connect Google servers.');
            else if (body.status === 'ZERO_RESULTS')
                reject('Unable to find that address.');
            else if (body.status === 'OK') {
                resolve(
                    {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
            }
        })
    })
}



geocodeAddress('Orta mahalle tahsin baba sokak merkez artvin')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
    });
