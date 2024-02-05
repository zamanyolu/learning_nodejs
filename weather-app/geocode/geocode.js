const request = require("request");
var fs = require('fs');
const API_KEY = JSON.parse(fs.readFileSync('../API_KEY.json'));
const openWeatherKey = API_KEY.openWeather_Key;

// url = "https://maps.googleapis.com/maps/api/js?sensor=false"

function geocodeAddress(address, callback) {

    var url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + API_KEY.API_KEY +
        "&address=" + address;


    request({url: url, json: true}, function (error, response, body) {
        if (error)
            callback('Unable to connect Google servers.');
        else if (body.status === 'ZERO_RESULTS')
            callback('Unable to find that address.');
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            // console.log('status code', response && response.statusCode);
            // console.log('body', JSON.stringify(body, undefined,2));
            // console.log('Address:', body.results[0].formatted_address);
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
        }
    })
}

module.exports= {
    geocodeAddress
};
