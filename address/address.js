const axios = require('axios');



const getAddressLatAndLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': 'f5652b12b8msh85de2054b2448d5p142496jsn1da0e6f08b05',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        address,
        lat,
        lng

    }
}

module.exports = {
    getAddressLatAndLng
}