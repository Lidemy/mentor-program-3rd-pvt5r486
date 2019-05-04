function stars(n = 1) {
  const startArray = [];
  let tempStr = '';
  for (let i = 0; i < n; i += 1) {
    tempStr += '*';
    startArray.push(tempStr);
  }
  return startArray;
}

module.exports = stars;
