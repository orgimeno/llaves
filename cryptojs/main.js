const fs = require('fs');
const csv = require('csv-parser');
const CryptoJS = require('crypto-js');

// Ruta del archivo CSV
const csvFilePath = '../diccionarios/diccionario.csv';

// Clave de cifrado por defecto
const defaultKey = 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+9px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==';

// Algoritmo de cifrado por defecto
const defaultAlgorithm = 'AES';

// Función para descifrar un string utilizando una clave y algoritmo específicos
function descifrarString(stringCifrado, clave, algoritmo) {
  const bytes = CryptoJS[algoritmo].decrypt(stringCifrado, clave);
  const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  return textoDescifrado;
}

// Leer el archivo CSV y descifrar el string para cada línea
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data) => {
    const clave = data.clave || defaultKey;
    const algoritmo = data.algoritmo || defaultAlgorithm;
    const stringCifrado = data.stringCifrado;
    const stringDescifrado = descifrarString(stringCifrado, clave, algoritmo);
    console.log('String descifrado:', stringDescifrado);
  })
  .on('end', () => {
    console.log('Lectura del CSV finalizada');
  });
