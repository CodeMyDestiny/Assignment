function isArmstrongNumber() {
  // Take input number from user
  const inputNum = parseInt(document.getElementById("inputNumber").value);

  // Calculate the number of digits in the input number
  const numStr = inputNum.toString();
  const numDigits = numStr.length;

  // Compute the sum of each digit raised to the power of the number of digits
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  // Check whether the sum is equal to the input number
  const isArmstrong = sum === inputNum;

  // Display the result to the user
  const resultStr = `The number ${inputNum} is ${
    isArmstrong ? "" : "not "
  }an Armstrong number.`;
  document.getElementById("result").innerHTML = resultStr;
}
