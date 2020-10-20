import { cardinalToOrdinal } from '../ordinal_numbers'

const TEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 20, 21, 22, 23, 24, 30, 40, 50, 100, 1000];
const RES =  ['0', '1st','2nd', '3rd','4th', '5th','6th', '7th','8th', '9th','10th', '20th','21st', '22nd','23rd', '24th', '30th', '40th', '50th', '100th', '1000th'];

describe('Reverse Polis Notation', () => {
  test(`Empty Call return '0'`, () => {
    const result = cardinalToOrdinal();
    expect(result).toBe('0');
  });

  for(let i = 0; i< TEST.length; i++) {
    test(`${TEST[i]} should return ${RES[i]}`, () => {
      const result = cardinalToOrdinal(TEST[i]);
      expect(result).toBe(RES[i]);
    });
  }
});