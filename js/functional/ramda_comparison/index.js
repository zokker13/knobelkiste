const R = require('ramda');
const _ = require('underscore');

function oldSchool(text) {
  const textNumbers = text.split(',');
  let sum = 0;

  for (let i = 0; i < textNumbers.length; i++) {
    const num = Number(textNumbers[i]);

    // Only below 1k
    if (num < 1000) {
      sum += num;
    }
  }

  return sum;
}

function newSchoolVanilla(text) {
  const textNumbers = text.split(',');

  const numbers = textNumbers.map((textNumber) => {
    return Number(textNumber);
  });

  const smallNumbers = numbers.filter((number) => {
    return number < 1000;
  });

  return smallNumbers.reduce((acc, number) => {
    return acc + number;
  });
}

function newSchoolUnderscore(text) {
  const textNumbers = text.split(',');

  return _.chain(textNumbers)
    .map((textNumber) => {
      return Number(textNumber);
    })
    .filter((number) => {
      return number < 1000;
    })
    .reduce((acc, number) => {
      return acc + number;
    })
    .value();
}

function ramdaStyle(text) {
  const textNumbers = text.split(',');

  return R.pipe(
    R.map(Number)
    , R.filter((number) => {
      return number < 1000;
    })
    , R.reduce((acc, number) => {
      return acc + number;
    }, 0)
  )(textNumbers);
}

function ramdaConvenience(text) {
  return R.pipe(
    R.map(Number)
    , R.filter((number) => {
      return number < 1000;
    })
    , R.sum
  )(text.split(','));
}

module.exports = {
  oldSchool,
  newSchoolVanilla,
  newSchoolUnderscore,
  ramdaStyle,
  ramdaConvenience,
};
