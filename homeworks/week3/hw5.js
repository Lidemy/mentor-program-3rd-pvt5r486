function add(a, b) {
  const arrLength = a.length >= b.length ? a.length : b.length;
  const aArray = [...a];
  const bArray = [...b];
  const resultArray = [];
  if (a.length < arrLength) {
    for (let i = 0; i < (arrLength - a.length); i += 1) {
      aArray.unshift('0');
    }
  } else {
    for (let i = 0; i < (arrLength - b.length); i += 1) {
      bArray.unshift('0');
    }
  }
  let counter = 0;
  for (let i = arrLength - 1; i >= 0; i -= 1) {
    if ((parseInt(aArray[i], 10) + parseInt(bArray[i], 10) + counter) >= 10) {
      const nowA = parseInt(aArray[i], 10);
      const nowB = parseInt(bArray[i], 10);
      const calc = (nowA + nowB + counter) % 10;
      counter = (nowA + nowB <= 10) ? 1 : Math.floor((nowA + nowB) / 10);
      resultArray.push(calc);
      if (i === 0) { resultArray.push(counter); }
    } else {
      const calc = parseInt(aArray[i], 10) + parseInt(bArray[i], 10) + counter;
      counter = 0;
      resultArray.push(calc);
    }
  }
  return resultArray.reverse().join('');
}

module.exports = add;
