function generateFibonacci() {
  // Take input number from user
  const inputNum = parseInt(document.getElementById("inputNumber").value);

  // Generate the first n Fibonacci numbers
  let fibArr = [];
  for (let i = 0; i < inputNum; i++) {
    if (i < 2) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }

  // Display the result to the user
  document.getElementById("result").textContent = fibArr.join(", ");
}
