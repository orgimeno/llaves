const puppeteer = require('puppeteer');

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

async function decryptjalkey(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`https://encode-decode.com/${url}-encrypt-online/`);

  await page.waitForSelector('textarea[name="encryption_destinationText"]');
  await page.$eval('textarea[name="encryption_destinationText"]', (el, destinationText) => el.value = destinationText, 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==');

  await page.waitForSelector('input[name="encryption_secret"]');
  await page.$eval('input[name="encryption_secret"]', (el, secret) => el.value = secret, '55 oner');

  await page.click('button#encryption_decrypt');

  await page.waitForSelector('textarea[name="encryption_sourceText"]');
  const sourceText = await page.$eval('textarea[name="encryption_sourceText"]', el => el.value);

  if (sourceText) {
    console.log('Resultado:', sourceText);
  } else {
    console.log('El resultado no se mostró en pantalla');
  }

  await browser.close();
}

async function main() {
  for (const url of urls) {
    console.log(`Descifrando en ${url}...`);
    await decryptjalkey(url);
    console.log('---');
  }
}

main();
