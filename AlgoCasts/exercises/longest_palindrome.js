const longestPalindrome = s => {
  let ans = ''
  let i = 0

  while (i < s.length) {
    let left = i

    while (i < s.length && s[i] === s[i + 1]) {
      i++
    }

    let right = i

    while (left - 1 >= 0 && right + 1 < s.length && s[left - 1] === s[right + 1]) {
      --left
      ++right
    }

    if (s.slice(left, right + 1).length > ans.length) {
      ans = s.slice(left, right + 1)
    }

    i++
  }

  return ans
}

console.log(longestPalindrome('babad'))
