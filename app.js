const address = require('./address/address');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {

    try {
        const coords = await address.getAddressLatAndLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dir} ${e}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);