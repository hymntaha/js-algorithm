let maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = -Infinity
  while(left < right){
    let leftValue = height[left]
    let rightValue = height[right]
    let minValue = Math.min(leftValue, rightValue)
    maxArea = Math.max(maxArea, minValue * (right - left))
    if(leftValue < rightValue){
      left++
    }else {
      right--
    }
  }
  return maxArea
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
