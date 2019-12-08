function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}


function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
  right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}


// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// -1,1,2,3,4
// Elegant solution
var threeSumSmaller = function (nums, target) {
  var count = 0, i, hi, lo, len = nums.length;
  if (len < 3) {
    return count;
  }

  nums.sort(function(a,b){
    return a - b;})

  for (i = 1; i < len - 1; i++) {
    lo=0;
    hi=len-1;
    while (lo < i && i < hi) {
      if(nums[lo] + nums[i]+nums[hi]>=target){
        hi--;
      } else {
        count += hi-i;
        lo++;
      }
    }
  }
  return count;
};

console.log(threeSumSmaller([-1, 4, 2, 1, 3], 5));
