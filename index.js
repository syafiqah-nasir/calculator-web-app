//CALCULATOR APP

const display = document.getElementById("display");

let justCalculated = false;

function keyHandler(input) {
  if(justCalculated) {
    display.value = "";
    display.value += input;
    justCalculated = false;
  } else {
    display.value += input;
  }
}

function deleteHandler() {
  display.value = "";
}

function calcHandler() {
  justCalculated = true;
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}