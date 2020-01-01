var sumZero = function(n) {
  let result = []

  integer = -n + 1
  for (let i =0; i < n; i ++) {
    result.push(integer)
    integer = integer + 2
  }

  return result
}

console.log(sumZero(5))
