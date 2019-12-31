const backspace_compare = function(str1, str2) {
  let arr1= str1.split(''), arr2=str2.split('');
  // let str1Pound = str1.indexOf('#');
  // let str2Pound = str2.indexOf('#');

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]==='#' ){
      arr1.splice(i-1,i)
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]==='#' ) {
      arr2.splice(i - 1, i)
    }
  }

  if(arr1.toString() == arr2.toString()){
    return true;
  }
  return false;
};

console.log(backspace_compare('xy#z', 'xzz#'));
