var reverseWords = function(s) {
  let str = s.split(' ')
  let newString = ''
  for (let s of str) {
    newString += s.split('').reverse().join("")
  }
  return newString.trim()
};

console.log(reverseWords('Let\'s take LeetCode contest'))
