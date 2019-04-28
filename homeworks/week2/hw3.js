function reverse(str) {
  let tempStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    tempStr += str[i];
  }
  return tempStr;
}

console.log(reverse('yoyoyo'));
console.log(reverse('1abc2'));
console.log(reverse('1,2,3,2,1'));
