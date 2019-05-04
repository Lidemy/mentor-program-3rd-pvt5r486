const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
  it('should return correct answer when a=9999 and b=111', () => {
    expect(add('9999', '111')).toBe('10110');
  });
  it('should return correct answer when a=109901109999 and b=1111111111', () => {
    expect(add('109901109999', '1111111111')).toBe('111012221110');
  });
});
