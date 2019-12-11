/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let exist = {};

  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(exist[target - n] !== undefined) {
      return [exist[target - n], i];
    }
    exist[n] = i;
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
