function alphaSwap(str) {
  const tempArray = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      tempArray.push(String.fromCharCode((str[i].charCodeAt() - 32)));
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      tempArray.push(String.fromCharCode((str[i].charCodeAt() + 32)));
    } else {
      tempArray.push(str[i]);
    }
  }
  return tempArray.join('');
}

module.exports = alphaSwap;
