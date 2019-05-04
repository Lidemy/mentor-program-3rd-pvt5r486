const stars = require('./hw1');

describe('hw1', () => {
  test('當 n = 1 陣列第 0 個元素應該有一個 * ', () => {
    expect(stars(1)).toEqual(['*']);
  });
  test('當 n = 3 陣列第 2 個元素應該有一個 *** ', () => {
    expect(stars(3)).toEqual(['*', '**', '***']);
  });
  test('當 n 不輸入時 陣列第 0 個元素應該有一個 * ', () => {
    expect(stars()).toEqual(['*']);
  });
});
