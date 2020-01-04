var sortArrayByParityII = function(A) {
  // let result = new Array(A.length);
  //
  // for(let i = 0, even = 0, odd = 1; i < A.length; i ++) {
  //   if(A[i] % 2 === 0) {
  //     result[even] = A[i];
  //     even += 2;
  //   } else {
  //     result[odd] = A[i];
  //     odd += 2;
  //   }
  // }
  // console.log(result)
  // return result;
  let evenArray = A.filter(x => x % 2 === 0);
  let oddArray = A.filter(x => x % 2 === 1);
  return A.map((x, index) => index % 2 === 0 ? evenArray.pop() : oddArray.pop());
};

sortArrayByParityII([4,2,5,7])
