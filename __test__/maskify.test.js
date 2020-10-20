import { maskify } from '../maskify'

const CREDIT_CARD_ONE = '1234567';
const CREDIT_CARD_TWO = '5234123412349876';
const CREDIT_CARD_TWO_RESULT = '5xxxxxxxxxxx9876';

describe('Maskify function', () => {
  test(`Empty Call return ''`, () => {
    const result = maskify();
    expect(result.getMaskNumber()).toBe('');
  });

  test('it should return the same number', () => {
    const result = maskify(CREDIT_CARD_ONE);
    expect(result.getFullMaskNumber()).toMatchObject({
      error: null,
      data: CREDIT_CARD_ONE
    });
  });

  test('it should return ONLY the result', () => {
    const result = maskify(CREDIT_CARD_TWO);
    expect(result.getMaskNumber()).toBe(CREDIT_CARD_TWO_RESULT);
  });

  test('it should return the original card number', () => {
    const result = maskify(CREDIT_CARD_TWO);
    expect(result.getOriginalNumber()).toBe(CREDIT_CARD_TWO);
  });

  test('it should return a error', () => {
    const result = maskify([]);
    expect(result.getFullMaskNumber()).toMatchObject({
      error: expect.any(String),
      data: null
    });
  });
});