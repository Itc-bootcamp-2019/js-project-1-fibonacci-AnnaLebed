const myBtn = document.getElementById("buttonCalc")
myBtn.addEventListener("click", numberFibonacci);


function numberFibonacci() {
    let number = document.getElementById("Xnumber").value;
    let previous1 = 0,
        previous2 = 1,
        result = 1;

    for (let i = 2; i <= number; i++) {
        result = previous1 + previous2;
        previous1 = previous2;
        previous2 = result;
    }
    console.log(result);
    document.getElementById("resultY").innerHTML = result;
}