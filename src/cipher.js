//en este arch solo van las funciones 

window.cipher = {
  encode: (offset, string) => {
    let result = '';
    let asciiNum = 0;
    let newAsciiNum = 0;
  
    for (let i = 0; i < string.length; i++) {
      asciiNum = string.charCodeAt([i]);
      newAsciiNum = (asciiNum-65+offset)%26+65;
      result += String.fromCharCode(newAsciiNum);
    }
    resultado.innerHTML = result;
  },
  decode: (offset, string) => {
    /* Acá va tu código */
  }
};
