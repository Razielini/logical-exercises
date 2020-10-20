/**
 * Given a string that contains a mathematical expression and calculate the result
 * 
 * @param {string} stringExpr 
 * 
 * @return {number} number
 */
function fromStringToResult(stringExpr) {
  return Function(`'use strict'; return (${stringExpr})`)()
}

/**
 * Given a string that contains a mathematical expression in ​reverse polish notation​,
 * evaluate the expression and return the result as integer.
 * 
 * If originalExpr is not a string return 0
 * 
 * @param {integer} originalExpr 
 * 
 * @return {integer} result
 */
export const reversePolishNotation = (originalExpr = '') => {
  if(typeof originalExpr !== 'string') return 0;

  let saveExpr = originalExpr.trim().split(' ');
  let stackNumbers = [];

  if(saveExpr[0] === '') return 0;

  saveExpr.map((digit) => {
    if(!isNaN(digit) && isFinite(digit)) {
      stackNumbers.push(parseInt(digit));
    } else {
      stackNumbers.push(fromStringToResult(`${stackNumbers.pop()} ${digit} ${stackNumbers.pop()}`));
    }
  });

  return stackNumbers[0];
}