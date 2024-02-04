const request = require("request");
const API_KEY = JSON.parse(fs.readFileSync('API_KEY.json'));

var getWeather = function(lat, lon, callback){

    url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY.openWeather_Key}`

    request({url: url, json: true}, function (error, response, body) {
        if (error)
            callback('Unable to connect OpenWeather servers.');
        else if (response.statusCode === 400 || response.statusCode === 401)
            callback('Unable to fetch weather.');
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};


module.exports = {
    getWeather
}