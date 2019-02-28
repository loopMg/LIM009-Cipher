//en este arch solo van las funciones 

window.cipher = {
  encode: (offset, string) => {
    let result = '';
    let asciiNum = 0;
    let newAsciiNum = 0;
  
    for (let i = 0; i < string.length; i++) {
      asciiNum = string.charCodeAt([i]);
      if(asciiNum >= 65 && asciiNum <= 90 ) {
      newAsciiNum = (asciiNum-65+offset)%26+65;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      newAsciiNum = (asciiNum-97+offset)%26+97;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum >= 48 && asciiNum <= 57) {
      newAsciiNum = (asciiNum-48+offset)%10+48;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum === 32) {
    result += ' ';
  }
}
    return result;
  },
  decode: (offset, string) => {
    let result = '';
    let asciiNum = 0;
    let newAsciiNum = 0;
  
    for (let i = 0; i < string.length; i++) {
      asciiNum = string.charCodeAt([i]);
      if (asciiNum >= 65 && asciiNum <= 90) {
      newAsciiNum = (asciiNum-65-25-offset)%26+90;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      newAsciiNum = (asciiNum-97-25-offset)%26+122;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum >= 48 && asciiNum <= 57) {
      newAsciiNum = (asciiNum-48-9-offset)%10+57;
      result += String.fromCharCode(newAsciiNum);
    } else if (asciiNum === 32) {
      result += ' ';
    }
  }
    return result;
  
    /* Acá va tu código */
  }
};
