var twoSum = function(nums, target) {
  let lo = 0,
    len = nums.length - 1,
    hi = len;
  for (lo; lo < len; lo++) {
    if (nums[lo] + nums[hi] == target) {
      return [lo, hi];
    } else {
      hi--;
    }
  }
};

console.log(twoSum([2, 11, 13, 5, 8, 6, s1, 7, 33, 2, 5], 9));
