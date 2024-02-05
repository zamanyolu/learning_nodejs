const request = require("request");
var fs = require('fs');
const API_KEY = JSON.parse(fs.readFileSync('../API_KEY.json'));

var getWeather = function(lat, lon, callback){

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY.openWeather_Key}`

    request({url: url, json: true}, function (error, response, body) {
        if (error)
            callback('Unable to connect OpenWeather servers.');
        else if (response.statusCode === 400 || response.statusCode === 401)
            callback('Unable to fetch weather.');
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.main.temp,
                apparentTemperature: body.main.feels_like
            });
        }
    });
};


module.exports = {
    getWeather
}