function checkPalindrome() {
  // Take input string from user
  const inputStr = document.getElementById("inputString").value.toLowerCase();

  // Reverse the input string
  const reversedStr = inputStr.split("").reverse().join("");

  // Check if the input string is equal to its reverse
  const isPalindrome = inputStr === reversedStr;

  // Display the result to the user
  const resultStr = `"${inputStr}" is ${
    isPalindrome ? "" : "not "
  }a palindrome.`;
  document.getElementById("result").innerHTML = resultStr;
}
