function bubbleSort() {
  const inputArr = document
    .getElementById("inputArray")
    .value.split(",")
    .map(Number);
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  // Display the sorted array to the user
  document.getElementById("result").value = inputArr.join(",");
}
