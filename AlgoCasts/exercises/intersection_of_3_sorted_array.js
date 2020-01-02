/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
let arraysIntersection = function(arr1, arr2, arr3) {
  let sumObject = {};
  for (let i = 0; i < arr1.length; i++) {
    sumObject[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if(sumObject.hasOwnProperty(arr2[i])){
      sumObject[arr2[i]]++;
    }
  }
  for (let i = 0; i < arr3.length; i++) {
    if(sumObject.hasOwnProperty(arr3[i]) ){
      if(sumObject[arr3[i]] ===2){
        sumObject[arr3[i]]++;
      }
    }
  }

  // let newArray = [];

  for (let property in sumObject) {
    if (sumObject[property] !== 3) {
      delete sumObject[property];
    }
  }
  // for (let property in sumObject) {
  //   newArray.push(Object.keys(sumObject));
  //
  // }

  return Object.keys(sumObject)
};

console.log(arraysIntersection([1,2,3,4,5], [1,2,5,7,9],[1,3,4,5,8]))
