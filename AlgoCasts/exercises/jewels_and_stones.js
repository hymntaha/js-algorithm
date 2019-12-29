// var numJewelsInStones = function(J, S) {
//   const jewels = new Set(J)
//   console.log(jewels);
//   S.split('').reduce((res, s) => {
//     console.log(res)
//     res + jewels.has(s), 0)
//   }
//   return
// };

const numJewelsInStones = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;

console.log(numJewelsInStones('aA','aAAbbbb'))

//another good solution
