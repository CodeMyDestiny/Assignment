function countVowels() {
  const inputStr = document.getElementById("inputString").value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (vowels.includes(inputStr[i])) {
      count++;
    }
  }
  document.getElementById("result").value = count;
}
