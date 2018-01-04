const toRomanNumeral = require('../src/toRomanNumeral');

describe('toRomanNumeral', () => {
  const baseCases = [
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ];

  const subtractiveNotationCases = [
    [4, 'IV'],
    [9, 'IX'],
    [40, 'XL'],
    [90, 'XC'],
    [400, 'CD'],
    [900, 'CM'],
  ];

  const complexCases = [
    [2, 'II'],
    [3, 'III'],
    [6, 'VI'],
    [27, 'XXVII'],
    [48, 'XLVIII'],
    [59, 'LIX'],
    [93, 'XCIII'],
    [141, 'CXLI'],
    [163, 'CLXIII'],
    [402, 'CDII'],
    [575, 'DLXXV'],
    [999, 'CMXCIX'],
    [1024, 'MXXIV'],
    [3999, 'MMMCMXCIX'],
  ];

  const allCases = [
    ...baseCases,
    ...subtractiveNotationCases,
    ...complexCases,
  ];

  allCases.forEach(([input, expected]) => {
    test(`it converts ${input} to ${expected}`, () => {
      expect(toRomanNumeral(input)).toBe(expected);
    });
  });
});
