function printPrimeNumbers() {
  // Take input numbers from user
  const startNum = parseInt(document.getElementById("startNumber").value);
  const endNum = parseInt(document.getElementById("endNumber").value);

  // Initialize an empty array to store prime numbers
  const primeArr = [];

  // Loop through each number in the range and check if it's prime
  for (let i = startNum; i <= endNum; i++) {
    let isPrime = true;

    // Check if the number is divisible by any number other than 1 and itself
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If the number is prime, add it to the array
    if (isPrime && i > 1) {
      primeArr.push(i);
    }
  }

  // Display the result to the user
  const resultStr =
    primeArr.length > 0 ? primeArr.join(", ") : "No prime numbers found";
  document.getElementById("result").innerHTML = resultStr;
}
