function findMinimum(arr) {
  var currentMin = arr[0];

  for (let val of arr) {
    if (val < currentMin) {
      currentMin = val;
    }
  }
  return currentMin
}
