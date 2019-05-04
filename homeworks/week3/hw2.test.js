const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('輸入 nick 應該回傳 NICK', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('輸入 Nick 應該回傳 nICK', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('輸入 ,hEllO122 應該回傳 ,HeLLo122', () => {
    expect(alphaSwap(',hEllO122')).toBe(',HeLLo122');
  });
});
