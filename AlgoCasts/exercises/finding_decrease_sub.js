var arr = [3,1,4,3,2,1,2,3];

function findDecreaseSubArray(arr) {
  if (
    Object.prototype.toString.call(arr) !== "[object Array]" ||
    arr.length == 0
  ) {
    return arr;
  }

  let longestArr = [];
  let tmpArr = [],
    lastTmpIndex = -1;

  arr.forEach((value, i) => {
    if (arr[lastTmpIndex] < value) {
      tmpArr = [];
    }
    // no matter what, I will put it in tmpArray
    lastTmpIndex = i;
    tmpArr.push(value);

    if (longestArr.length < tmpArr.length) {
      longestArr = tmpArr;
    }
  });
  return longestArr;
}

console.log(findDecreaseSubArray(arr));
