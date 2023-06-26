const urls = [
  'aes-128-cbc', 'aes-128-cbc-hmac-sha1', 'aes-128-cbc-hmac-sha256', 'aes-128-cfb', 'aes-128-cfb1', 'aes-128-cfb8', 'aes-128-ctr', 'aes-128-ecb', 'aes-128-ofb', 'aes-128-xts',
  'aes-192-cbc', 'aes-192-cfb', 'aes-192-cfb1', 'aes-192-cfb8', 'aes-192-ctr', 'aes-192-ecb', 'aes-192-ofb',
  'aes-256-cbc', 'aes-256-cbc-hmac-sha1', 'aes-256-cbc-hmac-sha256', 'aes-256-cfb', 'aes-256-cfb1', 'aes-256-cfb8', 'aes-256-ctr', 'aes-256-ecb', 'aes-256-ofb', 'aes-256-xts',
  'aes128', 'aes192', 'aes256', 'bf', 'bf-cbc', 'bf-cfb', 'bf-ecb', 'bf-ofb',
  // 'camellia-128-cbc', 'camellia-128-cfb', 'camellia-128-cfb1', 'camellia-128-cfb8', 'camellia-128-ecb', 'camellia-128-ofb',
  // 'camellia-192-cbc', 'camellia-192-cfb', 'camellia-192-cfb1', 'camellia-192-cfb8', 'camellia-192-ecb', 'camellia-192-ofb',
  // 'camellia-256-cbc', 'camellia-256-cfb', 'camellia-256-cfb1', 'camellia-256-cfb8', 'camellia-256-ecb', 'camellia-256-ofb',
  // 'camellia128', 'camellia192', 'camellia256', 'cast', 'cast-cbc', 'cast5-cbc', 'cast5-cfb', 'cast5-ecb', 'cast5-ofb',
  // 'des', 'des-cbc', 'des-cfb', 'des-cfb1', 'des-cfb8', 'des-ecb', 'des-ede', 'des-ede-cbc', 'des-ede-cfb', 'des-ede-ofb',
  // 'des-ede3', 'des-ede3-cbc', 'des-ede3-cfb', 'des-ede3-cfb1', 'des-ede3-cfb8', 'des-ede3-ofb', 'des-ofb', 'des3', 'desx', 'desx-cbc',
  // 'idea', 'idea-cbc', 'idea-cfb', 'idea-ecb', 'idea-ofb',
  // 'rc2', 'rc2-40-cbc', 'rc2-64-cbc', 'rc2-cbc', 'rc2-cfb', 'rc2-ecb', 'rc2-ofb',
  // 'rc4', 'rc4-40', 'rc4-hmac-md5',
  // 'rc5', 'rc5-cbc', 'rc5-cfb', 'rc5-ecb', 'rc5-ofb',
  // 'seed', 'seed-cbc', 'seed-cfb', 'seed-ecb', 'seed-ofb',
  // 'aes-128-ccm', 'aes-128-gcm', 'aes-192-ccm', 'aes-192-gcm', 'aes-256-ccm', 'aes-256-gcm',
  // 'blowfish', 'id-aes128-ccm', 'id-aes128-gcm', 'id-aes128-wrap', 'id-aes128-wrap-pad',
  // 'id-aes192-ccm', 'id-aes192-gcm', 'id-aes192-wrap', 'id-aes192-wrap-pad',
  // 'id-aes256-ccm', 'id-aes256-gcm', 'id-aes256-wrap', 'id-aes256-wrap-pad',
  // 'id-smime-alg-cms3deswrap'
];

async function decryptjalkey(url) {
  const newTab = window.open(url);
  
  await new Promise(resolve => setTimeout(resolve, 3000)); // Esperar a que se cargue la página (ajusta el tiempo según sea necesario)
  
  const destinationText = document.querySelector('textarea[name="encryption_destinationText"]');
  const secretInput = document.querySelector('input[name="encryption_secret"]');
  const decryptButton = document.querySelector('button[id="encryption_decrypt"]');

    await evaluate(() => {
      document.querySelector('textarea[name="encryption_destinationText"]').value = 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==';
      document.querySelector('input[name="encryption_secret"]').value = '55 oner';
      document.querySelector('button[id="encryption_decrypt"]').click();
    });

  if (destinationText && secretInput && decryptButton) {

    destinationText.value = 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==';
    secretInput.value = '55 oner';
    
    decryptButton.click();
    
    await new Promise(resolve => setTimeout(resolve, 1000000)); // Esperar a que se muestre el resultado en pantalla (ajusta el tiempo según sea necesario)
    
    const sourceText = window.document.querySelector('textarea[name="encryption_sourceText"]');
    
    if (sourceText && sourceText.value) {
      alert(sourceText.value); 
    }
  }
  
  //window.close();
}

for (const url of urls) {
  decryptjalkey(`https://encode-decode.com/${url}-encrypt-online/`);
}