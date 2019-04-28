function capitalize(str) {
  const tempArray = [];
  if (str[0] >= 'a' && str[0] <= 'z') {
    tempArray.push(String.fromCharCode((str[0].charCodeAt() - 32)));
  } else {
    tempArray.push(str[0]);
  }
  for (let i = 1; i < str.length; i += 1) {
    tempArray.push(str[i]);
  }
  return tempArray.join('');
}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
