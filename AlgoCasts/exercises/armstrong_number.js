let isArmstrong = function(N) {
  let armstrongNumber = 0;
  let numberToStr = N.toString();
  for (let i = 0; i < N.toString().length; i++) {
    armstrongNumber += Math.pow(Number(numberToStr[i]), numberToStr.length);

  }


  if (N == armstrongNumber) {
    return true
  }
  return false
};

console.log(isArmstrong(153))

// Better solution

//var isArmstrong = function(N) {
//     let n = 0;
//
//     for (const c of N + '') {
//         n++;
//     }
//
//     let powerSum = 0;
//
//     for (const c of N + '') {
//         powerSum += Math.pow(Number(c), n);
//     }
//
//     return powerSum === N;
// };
