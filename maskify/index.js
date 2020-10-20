function fillCharacters (stringArray, fillCharacter, countDigits, keepInitial) {
  for (let i = keepInitial; i < countDigits; i++) {
    stringArray[i] = fillCharacter;
  }
  return stringArray.join('');
}
/**
 * Given a credit card number, mask parts of it in order to obfuscate the full number while
 * keeping the card identifiable. The resulting string should have the majority of the credit
 * card number masked except for the ​first and the last four digits​. If the given string has
 * less than 7 characters, none should be masked.
 * 
 * @param {string} creditCardNumber 
 * 
 * @return {Object} result { data, error }
 */
export const maskify = (creditCardNumber = '') => {
  const minCharacters = 7;
  const keepInitial = 1;
  const keepLast = 4;
  const fillCharacter = 'x';

  const CREDIT_CARD_INVALID = 'The given credit card number is invalid.';

  let saveCreditCardNumber = null;
  let result = {
    error: null,
    data: null
  };

  if (typeof creditCardNumber === 'string') {
    saveCreditCardNumber = creditCardNumber.split('');
  } else {
    result.error = CREDIT_CARD_INVALID;
  }

  if(result.error === null) {
    const creditCardLength = saveCreditCardNumber.length;
    const countDigits = (creditCardLength - keepLast)

    if (creditCardLength > minCharacters) {
      result.data = fillCharacters(saveCreditCardNumber, fillCharacter, countDigits, keepInitial);
    } else {
      result.data = saveCreditCardNumber.join('');
    }
  }

  return {
    getMaskNumber () {
      return result.data;
    },
    getFullMaskNumber () {
      return result;
    },
    getOriginalNumber () {
      return creditCardNumber;
    }
  }
}
