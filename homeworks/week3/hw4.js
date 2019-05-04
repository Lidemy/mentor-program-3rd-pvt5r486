function isPalindromes(str) {
  if (str.length <= 0) { return false; }
  for (let counter = 0; counter < (str.length / 2); counter += 1) {
    if (str[counter] !== str[str.length - 1 - counter]) {
      return false;
    }
  }
  return true;
}
module.exports = isPalindromes;
