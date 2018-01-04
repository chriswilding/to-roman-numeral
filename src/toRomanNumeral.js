const ROMAN_TO_ARABIC = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function toRomanNumeral(input) {
  if (input < 1 || input > 3999) {
    throw new Error('input must be between 1 and 3999 inclusive');
  }

  const numerals = Object.keys(ROMAN_TO_ARABIC);
  const { result: output } = numerals.reduce(({ remainder, result }, roman) => {
    const arabic = ROMAN_TO_ARABIC[roman];
    const times = Math.floor(remainder / arabic);

    if (times > 0) {
      return {
        result: result + roman.repeat(times),
        remainder: remainder - (times * arabic),
      };
    }

    return { result, remainder };
  }, { remainder: input, result: '' });

  return output;
}

module.exports = toRomanNumeral;
