/**
 * Abrahamzick Orozco
 * FileSystem
 */
// const fs = require('fs'); // Librerias propias de Nodejs
// const express = require('express'); Librerias que no son nativos de Nodejs y toca importar estas librerias para poder referenciarlas
// const archivo = require('./archivo'); Son archivos creados por nosotros

const argv = require('./config/yargs').argv
const colors = require('colors');

const { crearTabla, listarTabla } = require('./operacionesMatematicas/multiplicar')


let generarArchivo = async(numero, limite) => {

    let operacion = await multiplicar.obtenerResultado(numero, limite);

}

let comando = argv._[0]

switch (comando) {
    case 'crear':
        crearTabla(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        console.log(argv);
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('Listar');
        break;

    default:
        console.log('Comando no reconocido');
}