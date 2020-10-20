import { reversePolishNotation } from '../reverse_polish_notation'

const TEST = ['2 9 5 + -', '3 4 + 5 *', '3 4 + 2 * 1 +', '3 4 5 * -', '3', '3 4 +', 3, ''];
const RES =  [ 12, 35, 15, 17, 3, 7, 0, 0];

describe('Reverse Polis Notation', () => {
  test(`Empty Call return 0`, () => {
    const result = reversePolishNotation();
    expect(result).toBe(0);
  });

  test(`${TEST[0]} should return ${RES[0]}`, () => {
    const result = reversePolishNotation(TEST[0]);
    expect(result).toBe(RES[0]);
  });

  test(`${TEST[1]} should return ${RES[1]}`, () => {
    const result = reversePolishNotation(TEST[1]);
    expect(result).toBe(RES[1]);
  });

  test(`${TEST[2]} should return ${RES[2]}`, () => {
    const result = reversePolishNotation(TEST[2]);
    expect(result).toBe(RES[2]);
  });

  test(`${TEST[3]} should return ${RES[3]}`, () => {
    const result = reversePolishNotation(TEST[3]);
    expect(result).toBe(RES[3]);
  });

  test(`${TEST[4]} should return ${RES[4]}`, () => {
    const result = reversePolishNotation(TEST[4]);
    expect(result).toBe(RES[4]);
  });

  test(`${TEST[5]} should return ${RES[5]}`, () => {
    const result = reversePolishNotation(TEST[5]);
    expect(result).toBe(RES[5]);
  });

  test(`TEST[6] should return 0`, () => {
    const result = reversePolishNotation(TEST[6]);
    expect(result).toBe(RES[6]);
  });

  test(`TEST[7] should return 0 for blank input`, () => {
    const result = reversePolishNotation(TEST[7]);
    expect(result).toBe(RES[7]);
  });
});