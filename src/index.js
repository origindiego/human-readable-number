const numbersZeroToNine = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const numbersElevenToNineteen = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const numbersTens = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const zeroes = {
  2: 'hundred',
  3: 'thousand',
  6: 'million',
  9: 'billion',
};

module.exports = function toReadable(number) {
  const zeroCounts = [...number.toString()].length - 1;

  if (zeroCounts === 0) {
    return numbersZeroToNine[number];
  }
  if (zeroCounts === 1 && number % 10 === 0) {
    return numbersTens[number];
  }
  if (zeroCounts === 1 && number % 10 !== 0 && number < 20) {
    return numbersElevenToNineteen[number];
  }
  if (zeroCounts === 1 && number % 10 !== 0 && number > 20) {
    return `${numbersTens[number - (number % 10)]} ${toReadable(number % 10)}`;
  }

  if (zeroCounts === 2 && number % 100 === 0) {
    return `${numbersZeroToNine[Math.floor(number / 10 ** zeroCounts)]} ${zeroes[zeroCounts]}`;
  }

  return `${numbersZeroToNine[Math.floor(number / 10 ** zeroCounts)]} ${zeroes[zeroCounts]} ${toReadable(number % 10 ** zeroCounts)}`.trim();
};
