var backspace_compare = function(S, T) {
  // console.log(getString(S));
  // console.log(getString(T));
  return getString(S) === getString(T)
};

var getString = function(str) {
  const stack = []
  console.log(str.length)
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.join('')
}


// console.log(backspace_compare('xy#z', 'xzz#'));
// console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xyz##', 'xp#'));
// console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));
