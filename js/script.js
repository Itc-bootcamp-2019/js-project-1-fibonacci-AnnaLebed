// Milestone 4

// function getInputValue() {
//     const inputValue = document.getElementById("inputX").value;
//     return inputValue;
// }

// function FibonacciValue() {

//     const inputValue = document.getElementById("inputX").value
//     let previous1 = 0,
//         previous2 = 1,
//         resultValue = 1;

//     for (let i = 2; i <= inputValue; i++) {
//         resultValue = previous1 + previous2;
//         previous1 = previous2;
//         previous2 = resultValue;
//     }
//     document.getElementById("resultY").innerHTML = resultValue
//     console.log(resultValue);
// }

// function getInputValue() {
//     const inputValue = document.getElementById("inputX").value
//     let previous1 = 0,
//         previous2 = 1,
//         resultValue = 1;

//     for (let i = 2; i <= inputValue; i++) {
//         resultValue = previous1 + previous2;
//         previous1 = previous2;
//         previous2 = resultValue;
//     }
//     document.getElementById("resultY").innerHTML = resultValue
//     console.log(resultValue);
// }

// Milestone 4.1

// *******************************************
// function FibonacciValue(n) {
//     if (n < 2) {
//         return n;
//     }
//     return (FibonacciValue(n - 1) + FibonacciValue(n - 2));
// };
// console.log(FibonacciValue(7))

// *****************************************

// const n = document.getElementById("inputX").value;
// console.log(n);
// const n = document.getElementById("inputX").value;

// function FibonacciValue() {
//     const n = document.getElementById("inputX").value;
//     if (n < 2) {
//         // return n;
//         // console.log(n);
//     }
//     document.getElementById("resultY").innerHTML = (FibonacciValue(n - 1) + FibonacciValue(n - 2));

// };


// ************************************************************************************

// Milestone 5-6
// 

function fibonacciValue() {
    const inputValue = parseInt(document.getElementById("inputX").value);
    if (inputValue > 50) {
        clearResult();
        document.getElementById("myalert").style.visibility = "visible";
        document.getElementById("inputX").style.border = "1px solid #D9534F";
    } else {
        clearResult();
        loaderOn();
        fetch("http://localhost:5050/fibonacci/" + inputValue).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    let answer = data.result;
                    loaderOff();
                    document.getElementById("resultY").innerHTML = answer;
                    console.log(answer);
                    console.log(data);
                });
            } else {
                response.text().then(text => {
                    console.log(text);
                    document.getElementById("loadRing").style.visibility = "hidden";
                    document.getElementById("resultY").innerHTML = "Server error: " + text;
                    document.getElementById("resultY").classList.add("error-result");
                });
            }
            console.log(response);
        });
    }
}
const button = document.getElementById("button");
button.addEventListener("click", fibonacciValue);
// button.addEventListener("click", fibonacciResults);



function loaderOn() {
    document.getElementById("loadRing").style.visibility = "visible";
}

function loaderOff() {
    document.getElementById("loadRing").style.visibility = "hidden";
    document.getElementById("resultY").innerHTML = " ";
}

function clearResult() {
    document.getElementById("resultY").innerHTML = " ";
    document.getElementById("myalert").style.visibility = "hidden";
    document.getElementById("inputX").style.border = "1px solid black";
    document.getElementById("resultY").classList.remove("error-result");
}

// *************************************************************************

// Milestone 7

function fibonacciResults() {
    // loaderOn();
    fetch("http://localhost:5050/getFibonacciResults")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    let getResult = JSON.stringify(data)
    document.getElementById("results").innerHTML = getResult;
};


button.addEventListener("click", fibonacciResults);