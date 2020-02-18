const request = require('request');
const {promisify} = require('util');

// const APPID = '18590bd532b321fa177a498cb55ee455';
require('dotenv').config() //https:npmjs.com/package/dotenv

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    })

    console.log(data.body)
}

getWeather()