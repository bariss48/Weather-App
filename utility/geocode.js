const request = require('request')
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: './config/api.env' });

const geocode = (address, callback) => {
    const modifed = encodeURIComponent(address);
    const url = process.env.GEOCODE_API_KEY_PART_ONE+encodeURIComponent(address)+process.env.GEOCODE_API_KEY_PART_TWO
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode