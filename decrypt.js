/**
 * 
 * Tenemos que correr el script para rellenar 2 campos. El primero es el input #encryption_destinationText con la constante $DESTINATIONTEXT y el segundo en el campo #encryption_secret con el valor de la constante $SECRET
 * 
 * */
(async () => {
  const URL = 'https://encode-decode.com/id-aes128-wrap-pad-encrypt-online/';
  const DESTINATIONTEXT = 'FkDY+3JK5pEtm3jChcNSz7Ig2BjpQb8L+px9oV7vetMWwGU1DX1Phuw+Ku1pzV5sOEPoqIa7DzFqDA4YrVTuw==';
  const SECRET = '55 oner';

  // Abrir la página en una nueva pestaña o ventana
  const page = window.open(URL);

  // Esperar a que se cargue la página
  await new Promise(resolve => {
    page.addEventListener('load', resolve);
  });

  // Obtener el textarea y establecer el texto de destino
  const textarea = page.document.querySelector('textarea[name="encryption_destinationText"]');
  textarea.value = DESTINATIONTEXT;

  // Obtener el campo de texto y establecer el secreto
  const secretInput = page.document.querySelector('input[name="encryption_secret"]');
  secretInput.value = SECRET;

  // Enviar el formulario (descifrar)
  const form = page.document.querySelector('form[name="encryption"]');
  form.submit();

  // Esperar 10 segundos
  await new Promise(resolve => {
    setTimeout(resolve, 10000);
  });

  // Cerrar la página
  //page.close();
})();
