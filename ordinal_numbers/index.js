/**
 * Given any cardinal number (positive integer), return the ​ordinal​ equivalent as a string,
 * according to english rules.
 * (For 0 as an input, return "0").
 * 
 * @param {integer} cardinalNumber 
 * 
 * @return {Object} result { data, error }
 */
export const cardinalToOrdinal = (cardinalNumber = 0) => {
  if (cardinalNumber <= 0 || typeof cardinalNumber != 'number') return '0';

  const lastDigit = cardinalNumber % 10;
  const lastTwoDigits = cardinalNumber % 100;
  const numberSuffix = ['st', 'nd', 'rd', 'th'];
  let indexSuffix = 3;

  if(lastDigit === 1 && lastTwoDigits !== 11) {
    indexSuffix = 0;
  } else if(lastDigit === 2 && lastTwoDigits !== 12) {
    indexSuffix = 1;
  } else if(lastDigit === 3 && lastTwoDigits !== 13) {
    indexSuffix = 2;
  }

  return `${cardinalNumber}${numberSuffix[indexSuffix]}`;
}
