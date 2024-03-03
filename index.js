// DOM variables
const inputText = document.getElementById('textInput');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopy = document.getElementById('copyText');
const display = document.getElementById('display');
const waitingText = document.querySelector('.waiting-for-text');
console.log(waitingText);
let text = '';

// funcion encriptar
function encryptText(inputText) {
  inputText = inputText.replace(/e/g, 'enter');
  inputText = inputText.replace(/i/g, 'imes');
  inputText = inputText.replace(/a/g, 'ai');
  inputText = inputText.replace(/o/g, 'ober');
  inputText = inputText.replace(/u/g, 'ufatu'); 
  text = inputText;
  return text;
}

// funcion desencriptar
function decryptText(encryptText) {
  encryptText = encryptText.replace(/enter/g, 'e');
  encryptText = encryptText.replace(/imes/g, 'i');
  encryptText = encryptText.replace(/ai/g, 'a');
  encryptText = encryptText.replace(/ober/g, 'o');
  encryptText = encryptText.replace(/ufatu/g, 'u');
  text = encryptText
  return text;
}

// copiar datos de texto imprimido en la pantalla
btnCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(text);
    // console.log('Texto ha copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
});

// activar funciones
btnEncriptar.addEventListener('click', () =>{
  display.textContent = encryptText(inputText.value);
  if(inputText.value === ''){
    waitingText.style.display = 'block';
  }else{
    display.style.display = 'flex';
    waitingText.style.display = 'none';
    btnCopy.style.display = 'block';
  }
});
btnDesencriptar.addEventListener('click', () =>{ 
  display.textContent = decryptText(inputText.value)
  if(inputText.value === ''){
    waitingText.style.display = 'block';
  }else{
    display.style.display = 'flex';
    waitingText.style.display = 'none';
    btnCopy.style.display = 'block';
  }
});
