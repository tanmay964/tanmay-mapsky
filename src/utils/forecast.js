const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    
    const url = 'https://api.darksky.net/forecast/489a1530f3e3f2a3ecae173b4633987d/' + latitude + ',' + longitude + '?units=si'
    request({url: url, json: true},(error, {body}) => {


    
    if(error){
        callback('Unable to connect to location services', undefined)
    }else if(body.error){
        callback('Unable to find location', undefined)
    }
    else{
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')

    }
    })

}

module.exports = forecast