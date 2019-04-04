/**
 * Genera Archivos 
 * @author Abrahamzick Orozco
 */

const fs = require('fs');


let crearArchivo = (data, base) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(`./tablas/tablaMultiplicar${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablaMultiplicar${base}.txt`)
        });
    })


}

module.exports = {
    crearArchivo
}