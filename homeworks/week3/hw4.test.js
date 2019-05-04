const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
  it('should return correct answer when str = apple', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
  it('should return correct answer when str = aaaaa', () => {
    expect(isPalindromes('aaaaa')).toBe(true);
  });
  it('should return correct answer when str = applppa', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
  it('should return correct answer when str = abcdba', () => {
    expect(isPalindromes('abcdba')).toBe(false);
  });
  it('should return correct answer when str = "" ', () => {
    expect(isPalindromes('')).toBe(false);
  });
});
