/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var sum = nums[0];
  var max = sum;
  for(let i = 1; i < nums.length ; i++){
    sum=(sum+nums[i])>nums[i]?(sum+nums[i]):nums[i];
    max=sum>max?sum:max;
  }
  return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// // -5,-3,-2,-1,1,1,2,4,4

