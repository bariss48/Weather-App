const request = require('request')
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: './config/api.env' });

const forecast = (latitude, longitude, callback) => {
    const url = process.env.FORECAST_API_KEY + latitude + ',' + longitude //+ '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current)//body.location.localtime+"-Temperature:"+body.current.temperature+" "+"-Feelslike:"+body.current.feelslike+" "+"-Forecast:"+body.current.weather_descriptions+" "+"-humidity:"+body.current.humidity+" "+"-wind_speed:"+body.current.wind_speed,)
        }
    })
}

module.exports = forecast