const axios = require('axios');

const getClima = async(lat, lng) => {

    const apiKey = 'ad456b681a34fdff58d267f3a2a2444a';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}