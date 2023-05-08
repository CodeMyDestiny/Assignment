function checkAnagram() {
  // Get input strings from user
  const str1 = document.getElementById("inputString1").value;
  const str2 = document.getElementById("inputString2").value;

  // Remove whitespace and convert both strings to lowercase
  const cleanStr1 = str1.replace(/\s+/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, "").toLowerCase();

  // Check if the strings are of equal length
  if (cleanStr1.length !== cleanStr2.length) {
    document.getElementById("result").innerHTML =
      "The strings are not anagrams.";
    return;
  }

  // Sort the characters in each string and check if they are equal
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    document.getElementById("result").innerHTML = "The strings are anagrams!";
  } else {
    document.getElementById("result").innerHTML =
      "The strings are not anagrams.";
  }
}
