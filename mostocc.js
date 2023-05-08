function mostOccurring() {
  // Get input array from user
  const inputArray = document
    .getElementById("inputArray")
    .value.split(",")
    .map(Number);

  // Find the most occurring element(s) in the array
  const elements = {};
  let maxCount = 0;
  let mostOccurringElements = [];

  inputArray.forEach((num) => {
    elements[num] = (elements[num] || 0) + 1;

    if (elements[num] > maxCount) {
      maxCount = elements[num];
      mostOccurringElements = [num];
    } else if (elements[num] === maxCount) {
      mostOccurringElements.push(num);
    }
  });

  // Display the result to the user
  document.getElementById("result").value = mostOccurringElements.join(", ");
}
