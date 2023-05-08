function countWords() {
  // Take input string from user
  const inputStr = document.getElementById("inputString").value.trim();

  // Split the input string into words using whitespace as the delimiter
  const wordsArr = inputStr.split(" ");

  // Count the number of words in the array
  const numWords = wordsArr.length;

  // Display the result to the user
  document.getElementById("result").value = numWords;
}
