/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let obj = nums.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
  for (let [key, value] of Object.entries(obj)) {
    if(value == 1){
      return key;
    }
  }
};


// Elite solution

// time O(n)
// space O(1)
function singleNumber(nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}


console.log(singleNumber([4,1,2,1,2]))
