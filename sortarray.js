function sortArray() {
  // Get input array from user
  const inputArr = document.getElementById("inputArray").value;

  // Convert input array string to actual array
  const arr = inputArr.split(",").map(Number);

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Display the sorted array to the user
  document.getElementById("outputArray").value = arr.join(", ");
}
