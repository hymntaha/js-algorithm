/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  // create a result variable
  var result = ''

  for (var i = 0; i < str.length; i++) {
    // get the code of the current character
    var code = str.charCodeAt(i)
    console.log(code)

    // check if it's within the range of capital letters
    if (code > 64 && code < 91) {

      // if so, add a new character to the result string
      // of the character from our code, plus 32
      result += String.fromCharCode(code + 32)
    } else {

      // otherwise, just add the current character
      result += str.charAt(i)
    }
  }

  // return the result
  return result
};
