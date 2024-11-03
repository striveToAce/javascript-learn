/* 
The Module pattern encapsulates code in a way that only exposes what is necessary.
*/
const Module = (function () {
  let privateVariable = "9811";
  function privateFunction() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function () {
      privateFunction();
    },
  };
})();

Module.publicMethod();




const CalculatorModule = (function() {
  // Private variables and methods
  let result = 0;

  function add(value) {
      result += value;
  }

  function subtract(value) {
      result -= value;
  }

  function getResult() {
      return result;
  }

  // Public API
  return {
      add,
      subtract,
      getResult
  };
})();

// Usage
CalculatorModule.add(10);
CalculatorModule.subtract(5);
console.log(CalculatorModule.getResult()); // Output: 5
