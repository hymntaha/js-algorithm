var findDisappearedNumbers = function (nums) {
  let len = nums.length
  let arr = []
  for (let i = 0; i < len; i++) {
    arr[i] = i+1
  }
  console.log(arr);
  for (v of nums) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
