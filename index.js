const request = require('request'); // npm i request
 //weather documentation prefers capitals

require('dotenv').config()

const getWeather = () => {
    request({ // https://www.npmjs.com/package/requst
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`, //what want to request and use my key
        json: false //return true in json format (json format if true, raw data if false)
    }, (err,res) => {
        if(err) throw err;
        //state what error message is
        /*common fixes: check package installed,
        1. referenceError: APP is not defined - APP needs to be APPID or change
     */
        console.log(res.body); //if gone well it will log the data in the console
    })
}

getWeather();
