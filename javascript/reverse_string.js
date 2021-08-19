function reverseString(str) {
  // type your code here
  if(str.length === 0){
    return str
  }

  if(str.length === 1){
    return str[0]
  }

  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('ih'));

  console.log("Expecting: 'hello'");
  console.log("=>", reverseString('olleh'));

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  // if string length is 1
    // return first (only) element
  // return the last element + the return value of calling the function again with the last element removed from the string

// And a written explanation of your solution
