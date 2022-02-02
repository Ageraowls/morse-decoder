const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = [];
  for (let i = 0; i < expr.length; i += 10) {
    let a = expr.slice(i, i + 10);
    result.push(a);
  }
  for (let i = 0; i < result.length; i++) {
    let array = [];
    for (let j = 0; j < result[i].length; j += 2) {
      let b = result[i].slice(j, j + 2);
      array.push(b);
    }
    result[i] = array;
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].filter((el) => {
      return el === '10' || el === '11' || el === '**';
    });
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] === '10') {
        result[i][j] = '.';
      }
      if (result[i][j] === '11') {
        result[i][j] = '-';
      }
      if (result[i][j] === '**') {
        result[i] = [' '];
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].join('');
  }
  let str = '';
  for (let i = 0; i < result.length; i++) {
    if (result[i] === ' ') {
      str += result[i];
    }
    for (let prop in MORSE_TABLE) {
      if (prop === result[i]) {
        str += MORSE_TABLE[prop];
      }
    }
  }

  return str;
}

module.exports = {
  decode,
};
