function join(array, concatStr) {
  let tempStr = '';
  for (let i = 0; i < array.length; i += 1) {
    if ((i + 1) === array.length) {
      tempStr += array[i];
    } else {
      tempStr += array[i] + concatStr;
    }
  }
  return tempStr;
}

function repeat(str, times) {
  let tempStr = '';
  for (let i = 0; i < times; i += 1) {
    tempStr += str;
  }
  return tempStr;
}

console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('yoyo', 2));
