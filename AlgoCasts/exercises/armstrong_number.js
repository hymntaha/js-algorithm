let isArmstrong = function(N) {
  let armstrongNumber = 0;
  let numberToStr = N.toString();
  for (let i = 0; i < N.toString().length; i++) {
    armstrongNumber += Math.pow(Number(numberToStr[i]), numberToStr.length);

  }
  // console.log(N)
  // console.log(armstrongNumber)
  if (N == armstrongNumber) {
    return true
  }
  return false
};

console.log(isArmstrong(153))
