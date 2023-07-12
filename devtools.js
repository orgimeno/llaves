const urls = [
  'aes-128-cbc', 'aes-128-cbc-hmac-sha1', 'aes-128-cbc-hmac-sha256', 'aes-128-cfb', 'aes-128-cfb1', 'aes-128-cfb8', 'aes-128-ctr', 'aes-128-ecb', 'aes-128-ofb', 'aes-128-xts',
  'aes-192-cbc', 'aes-192-cfb', 'aes-192-cfb1', 'aes-192-cfb8', 'aes-192-ctr', 'aes-192-ecb', 'aes-192-ofb',
  'aes-256-cbc', 'aes-256-cbc-hmac-sha1', 'aes-256-cbc-hmac-sha256', 'aes-256-cfb', 'aes-256-cfb1', 'aes-256-cfb8', 'aes-256-ctr', 'aes-256-ecb', 'aes-256-ofb', 'aes-256-xts',
  'aes128', 'aes192', 'aes256', 'bf', 'bf-cbc', 'bf-cfb', 'bf-ecb', 'bf-ofb',
  'camellia-128-cbc', 'camellia-128-cfb', 'camellia-128-cfb1', 'camellia-128-cfb8', 'camellia-128-ecb', 'camellia-128-ofb',
  'camellia-192-cbc', 'camellia-192-cfb', 'camellia-192-cfb1', 'camellia-192-cfb8', 'camellia-192-ecb', 'camellia-192-ofb',
  'camellia-256-cbc', 'camellia-256-cfb', 'camellia-256-cfb1', 'camellia-256-cfb8', 'camellia-256-ecb', 'camellia-256-ofb',
  'camellia128', 'camellia192', 'camellia256', 'cast', 'cast-cbc', 'cast5-cbc', 'cast5-cfb', 'cast5-ecb', 'cast5-ofb',
  'des', 'des-cbc', 'des-cfb', 'des-cfb1', 'des-cfb8', 'des-ecb', 'des-ede', 'des-ede-cbc', 'des-ede-cfb', 'des-ede-ofb',
  'des-ede3', 'des-ede3-cbc', 'des-ede3-cfb', 'des-ede3-cfb1', 'des-ede3-cfb8', 'des-ede3-ofb', 'des-ofb', 'des3', 'desx', 'desx-cbc',
  'idea', 'idea-cbc', 'idea-cfb', 'idea-ecb', 'idea-ofb',
  'rc2', 'rc2-40-cbc', 'rc2-64-cbc', 'rc2-cbc', 'rc2-cfb', 'rc2-ecb', 'rc2-ofb',
  'rc4', 'rc4-40', 'rc4-hmac-md5',
  'rc5', 'rc5-cbc', 'rc5-cfb', 'rc5-ecb', 'rc5-ofb',
  'seed', 'seed-cbc', 'seed-cfb', 'seed-ecb', 'seed-ofb',
  'aes-128-ccm', 'aes-128-gcm', 'aes-192-ccm', 'aes-192-gcm', 'aes-256-ccm', 'aes-256-gcm',
  'blowfish', 'id-aes128-ccm', 'id-aes128-gcm', 'id-aes128-wrap', 'id-aes128-wrap-pad',
  'id-aes192-ccm', 'id-aes192-gcm', 'id-aes192-wrap', 'id-aes192-wrap-pad',
  'id-aes256-ccm', 'id-aes256-gcm', 'id-aes256-wrap', 'id-aes256-wrap-pad',
  'id-smime-alg-cms3deswrap'
];
//const DESTINATIONTEXT = 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==';
const DESTINATIONTEXT = 'KRVZpucjykj9Eo1Na9hKkg==';
const SECRET = '55 oner';

// Obtener el textarea y establecer el texto de destino
const textarea = document.querySelector("#encryption_destinationText");
textarea.value = DESTINATIONTEXT;

// Obtener el campo de texto y establecer el secreto
const secretInput = document.querySelector("#encryption_secret");
secretInput.value = SECRET;

// Enviar el formulario (descifrar)
const decryptButton = document.querySelector("#encryption_decrypt");
decryptButton.click();

alert("epa");
console.log(document.querySelector("#encryption_sourceText"));
// Esperar a que la página se cargue después de enviar el formulario
window.addEventListener('load', () => {
  // Obtener el input de origen y mostrar su contenido en un alert si está descodificado
  const sourceInput = document.querySelector("#encryption_sourceText");
  const sourceText = sourceInput.value;

    alert(sourceText);
 });
