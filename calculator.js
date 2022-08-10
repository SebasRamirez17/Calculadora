const main = document.getElementById("main-container");
const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const selector = document.getElementById("select-operation");
const resultado = document.getElementById("result");
const residuo = document.getElementById("residuo");

document.addEventListener("keydown", (event) => {
  const codeValue = event.keyCode;

  if (codeValue === 13) {
    if (selector.value == "+") {
      let count = parseInt(numberOne.value) + parseInt(numberTwo.value);
      resultado.textContent = count;
    } else if (selector.value == "-") {
      let count = parseInt(numberOne.value) - parseInt(numberTwo.value);
      resultado.textContent = count;
    } else if (selector.value == "*") {
      let count = parseInt(numberOne.value) * parseInt(numberTwo.value);
      resultado.textContent = count;
    } else if (selector.value == "/") {
      let count = parseInt(numberOne.value) / parseInt(numberTwo.value);
      if(numberOne.value === 0 || numberTwo.value === 0){
        alert ("error");
      }
      resultado.textContent = count.toFixed(2);
    }else if (selector.value == "%") {
        let count = parseInt(numberOne.value) % parseInt(numberTwo.value);
        resultado.textContent = count;
    }
  }
  
});
