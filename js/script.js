document.getElementById("x").innerHTML = "7";

function numberFibonacci(number) {
  let previous1 = 0,
    previous2 = 1,
    result = 1;

  for (let i = 2; i <= number; i++) {
    result = previous1 + previous2;
    previous1 = previous2;
    previous2 = result;
  }
  return result;
}

const calculation = numberFibonacci(5);
document.getElementById("y").innerHTML = numberFibonacci(7);
