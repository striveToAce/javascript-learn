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
