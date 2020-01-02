const replaceElements = arr => {
  let prev = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    arr[i] = prev;
    prev = Math.max(prev, cur);
  }
  return arr;
};


console.log(replaceElements([5,8,11,19,3,2,6]));
