/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
  let sortedArr = A.sort(function(a, b){return a-b});
  let high = sortedArr.length-1;
};

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))
