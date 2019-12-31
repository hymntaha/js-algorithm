var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (i = 0; i < nums.length; i++) {
    if(i>0 && nums[i]===nums[i-1]){
      continue;
    }
    search_pair(nums, -nums[i], i + 1, triplets);
  }
  return triplets;
};

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) { // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

console.log(threeSum([-1,0,1,2,-1,-4]))