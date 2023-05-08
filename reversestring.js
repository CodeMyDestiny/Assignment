function reverseString() {
  var input = document.getElementById("inputString").value;
  var output = input.split("").reverse().join("");
  document.getElementById("outputString").value = output;
}
