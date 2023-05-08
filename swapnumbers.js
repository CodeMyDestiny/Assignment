function swapNumbers() {
  // Take input values from user
  let num1 = Number(document.getElementById("inputNum1").value);
  let num2 = Number(document.getElementById("inputNum2").value);

  // Swap the numbers using a temporary variable
  let temp = num1;
  num1 = num2;
  num2 = temp;

  // Update the values in the input fields
  document.getElementById("inputNum1").value = num1;
  document.getElementById("inputNum2").value = num2;
}
