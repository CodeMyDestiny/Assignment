function selectTask() {
  var taskSelect = document.getElementById("taskSelect");
  var selectedValue = taskSelect.value;

  switch (selectedValue) {
    case "reverseString":
      // Load the script for the Reverse String Calculator
      var script = document.createElement("script");
      script.src = "reversestring.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `
              <div class="col-md-6">
                <form>
                  <div class="form-group">
                    <label for="inputString">Enter a string to reverse:</label>
                    <input type="text" class="form-control" id="inputString" />
                  </div>
                  <button type="button" class="btn btn-primary" onclick="reverseString()">Reverse</button>
                  <div class="mt-3">
                    <label for="outputString">Reversed string:</label>
                    <input type="text" class="form-control" id="outputString" readonly />
                  </div>
                </form>
              </div>
            `;
      break;

    case "countVowels":
      // Load the script for the Count Vowels in String task
      var script = document.createElement("script");
      script.src = "countvowel.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="inputString">Enter a string:</label>
            <input type="text" class="form-control" id="inputString" />
          </div>
          <button type="button" class="btn btn-primary" onclick="countVowels()">Count</button>
          <div class="mt-3">
            <label for="outputString">Number of vowels in string:</label>
            <input type="text" class="form-control" id="result" readonly />
          </div>
        </form>
      </div>
    `;
      break;

    case "isArmstrongNumber":
      var script = document.createElement("script");
      script.src = "armstrongnumber.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="inputNumber">Enter a number:</label>
            <input type="text" class="form-control" id="inputNumber" />
          </div>
          <button type="button" class="btn btn-primary" onclick="isArmstrongNumber()">Check</button>
          <div class="mt-3">
            <label for="outputString">Result:</label>
            <div class="form-control" id="result" readonly></div>
          </div>
        </form>
      </div>
    `;
      break;

    case "checkPalindrome":
      // Load the script for the Palindrome task
      var script = document.createElement("script");
      script.src = "palindrome.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputString">Enter a string:</label>
          <input type="text" class="form-control" id="inputString" />
        </div>
        <button type="button" class="btn btn-primary" onclick="checkPalindrome()">Check</button>
        <div class="mt-3">
          <label for="outputString">Result:</label>
          <div class="form-control" id="result"></div>
        </div>
      </form>
    </div>
    `;
      break;

    case "countWords":
      var script = document.createElement("script");
      script.src = "countwords.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="inputString">Enter a string:</label>
              <input type="text" class="form-control" id="inputString" />
            </div>
            <button type="button" class="btn btn-primary" onclick="countWords()">Count</button>
            <div class="mt-3">
              <label for="outputString">Number of words in string:</label>
              <input type="text" class="form-control" id="result" readonly />
            </div>
          </form>
        </div>
        `;
      break;

    case "printPrimeNumbers":
      var script = document.createElement("script");
      script.src = "countprime.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <label for="startNumber">Enter starting number:</label>
                <input type="number" class="form-control" id="startNumber" />
              </div>
              <div class="form-group">
                <label for="endNumber">Enter ending number:</label>
                <input type="number" class="form-control" id="endNumber" />
              </div>
              <button type="button" class="btn btn-primary" onclick="printPrimeNumbers()">Print Prime Numbers</button>
              <div class="mt-3">
                <label for="outputString">Prime Numbers:</label>
                <div class="form-control" id="result"></div>
              </div>
            </form>
          </div>
        `;
      break;

    case "generateFibonacci":
      var script = document.createElement("script");
      script.src = "fibonacci.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputNumber">Enter the number of Fibonacci numbers to display:</label>
          <input type="number" class="form-control" id="inputNumber" />
        </div>
        <button type="button" class="btn btn-primary" onclick="generateFibonacci()">Print</button>
        <div class="mt-3">
          <label for="outputString">Fibonacci series:</label>
          <div class="form-control" id="result"></div>
        </div>
      </form>
    </div>
  `;
      break;

    case "checkAnagram":
      var script = document.createElement("script");
      script.src = "anagram.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
    <form>
      <div class="form-group">
        <label for="inputString1">Enter first string:</label>
        <input type="text" class="form-control" id="inputString1" />
      </div>
      <div class="form-group">
        <label for="inputString2">Enter second string:</label>
        <input type="text" class="form-control" id="inputString2" />
      </div>
      <button type="button" class="btn btn-primary" onclick="checkAnagram()">Check</button>
      <div class="mt-3">
        <label for="outputString">Result:</label>
        <div class="form-control" id="result"></div>
      </div>
    </form>
  </div>`;
      break;

    case "swapNumbers":
      var script = document.createElement("script");
      script.src = "swapnumbers.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputNum1">Enter number 1:</label>
          <input type="text" class="form-control" id="inputNum1" />
        </div>
        <div class="form-group">
          <label for="inputNum2">Enter number 2:</label>
          <input type="text" class="form-control" id="inputNum2" />
        </div>
        <button type="button" class="btn btn-primary" onclick="swapNumbers()">Swap</button>
        </form>
    </div>
  `;
      break;

    case "mostOccurring":
      var script = document.createElement("script");
      script.src = "mostocc.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
    <form>
      <div class="form-group">
        <label for="inputArray">Enter array elements separated by comma:</label>
        <input type="text" class="form-control" id="inputArray" />
      </div>
      <button type="button" class="btn btn-primary" onclick="mostOccurring()">Find</button>
      <div class="mt-3">
        <label for="outputString">Most occurring element:</label>
        <input type="text" class="form-control" id="result" readonly />
      </div>
    </form>
  </div>`;
      break;

    case "sortArray":
      var script = document.createElement("script");
      script.src = "sortarray.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputArray">Enter an Array separated by comma:</label>
          <input type="text" class="form-control" id="inputArray" />
        </div>
        <button type="button" class="btn btn-primary" onclick="sortArray()">Sort</button>
        <div class="mt-3">
          <label for="outputString">Sorted Array:</label>
          <input type="text" class="form-control" id="outputArray" readonly />
        </div>
      </form>
    </div>`;
      break;

    case "bubbleSort":
      var script = document.createElement("script");
      script.src = "bubblesort.js";
      document.head.appendChild(script);

      // Update the content of the container
      document.getElementById("content").innerHTML = `<div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputArray">Enter an Array separated by comma:</label>
          <input type="text" class="form-control" id="inputArray" />
        </div>
        <button type="button" class="btn btn-primary" onclick="bubbleSort()">Sort</button>
        <div class="mt-3">
          <label for="outputString">Sorted Array using Bubble sort algorithm:</label>
          <input type="text" class="form-control" id="result" readonly />
        </div>
      </form>
    </div>`;
      break;
  }
}
