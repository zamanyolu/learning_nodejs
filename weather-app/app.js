const geocode = require('./geocode/geocode.js');
const API_KEY = JSON.parse(fs.readFileSync('API_KEY.json'));
const openWeatherKey = API_KEY.openWeather_Key;



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

openWeatherQueryUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`

address = encodeURI(argv.address);

geocode.geocodeAddress(address, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }

});


a = 5;