function isPalindrome(word) {
  // Write your algorithm here

//If the argument is an EMPTY string, return false.
  if (word === "") {
    return false
// If the argument is a string, return true if the argument strictly equals itself in reverse, and false if not.
  } else if (typeof word === "string") {
    const reversedWord = word.split("").reverse().join("")
    return word === reversedWord
// If the argument data type is not a string (such as a number), return false (preventing a non string from being reversed, which will result in a error.)
  } else {
    return false
  }
}

/*
  Add your pseudocode here:

My function will take in a word as an argument and return "true" if it is a palindrome (a word that reads the same both ways) and "false" if it not.
I will do this by comparing the word given as an argument and the word in its reversed form and seeing if they strictly equal eachothor.

*/

/*
  Add written explanation of your solution here:

  In order to evaluate if the argument is a palindrome or not, I had the argument compared with its value reversed. I also made sure my code handles edge cases such as empty strings and numbers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chaya"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("otto"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome(66733));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("h"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;