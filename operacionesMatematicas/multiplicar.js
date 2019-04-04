/**
 * Multiplicar por Base
 * @author Abrahamzick Orozc
 */
const archivo = require('../fileSystem/file')
const colors = require('colors');

let crearTabla = async(base, limite) => {

    if (!Number(base)) {
        throw new Error('No es un número')
        return
    }
    let data = ''

    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${i} = ${base * i}\n`

    }

    let resp = await archivo.crearArchivo(data, base)
    return resp
}

let listarTabla = async(base, limite) => {

    if (!Number(base)) {
        throw new Error('No es un número')
        return
    }
    let data = ''
    console.log('==========================='.green);
    console.log(`=====  Tabla del ${base}  =======`.green);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${colors.blue(base)} * ${i} = ${colors.yellow(base * i)}`);

    }
}

module.exports = {
    crearTabla,
    listarTabla
}