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
    return result;
  },
  decode: (offset, string) => {
    let result = '';
    let asciiNum = 0;
    let newAsciiNum = 0;
  
    for (let i = 0; i < string.length; i++) {
      asciiNum = string.charCodeAt([i]);
      newAsciiNum = (asciiNum-65-25-offset)%26+90;
      result += String.fromCharCode(newAsciiNum);
    }
    return result;
  
    /* Acá va tu código */
  }
};
