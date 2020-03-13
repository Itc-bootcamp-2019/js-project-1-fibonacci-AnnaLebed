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



function fibonacciValue() {
    clearResult();
    const inputValue = parseInt(document.getElementById("inputX").value);
    if (inputValue > 50) {
        document.getElementById("myalert").classList.add("visibility-vis");
        document.getElementById("inputX").classList.add("border-red");
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
                    fibonacciResults();
                });
            } else {
                response.text().then(text => {
                    console.log(text);
                    document.getElementById("loadRing").classList.add("visibility-hid");
                    document.getElementById("resultY").innerHTML = "Server error: " + text;
                    document.getElementById("resultY").classList.add("error-result");
                });
            }
            console.log(response);
        })
    }
}
const button = document.getElementById("button");
button.addEventListener("click", fibonacciValue, fibonacciResults);



function loaderOn() {
    document.getElementById("loadRing").classList.add("visibility-vis");
}

function loaderOff() {
    document.getElementById("loadRing").classList.add("visibility-hid");
    document.getElementById("resultY").innerHTML = " ";
}

function clearResult() {
    document.getElementById("resultY").innerHTML = " ";
    document.getElementById("inputX").classList.add("border-on");
    document.getElementById("resultY").classList.remove("error-result");
}



function fibonacciResults() {
    document.getElementById("loadRing").classList.add("visibility-hid");
    lowerLoaderOn();
    fetch("http://localhost:5050/getFibonacciResults")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let response = data;
            lowerLoaderOff();

            for (let i = 0; i < response.results.length; i++) {
                console.log(response.results[i].number);
                console.log(response.results[i].result);
                console.log(Date(response.results[i].createdDate));

                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add("wrapper");

                const divFib = document.createElement('div');
                divFib.innerHTML = "The Fibonacci Of";

                const divNumber = document.createElement('div');
                divNumber.classList.add("bold");
                divNumber.classList.add("padding");
                divNumber.innerHTML = response.results[i].number;

                const divIs = document.createElement('div');
                divIs.innerHTML = "is";

                const divResult = document.createElement('div');
                divResult.classList.add("bold");
                divResult.classList.add("padding-left");
                divResult.innerHTML = response.results[i].result;

                const divCalc = document.createElement('div');
                divCalc.innerHTML = ". Calculated at: ";

                const divDate = document.createElement('div');
                divDate.classList.add("padding");
                divDate.innerHTML = new Date(response.results[i].createdDate);

                wrapperDiv.append(divFib, divNumber, divIs, divResult, divCalc, divDate);
                const row = document.getElementById("resultsRow");
                row.append(wrapperDiv);
            };

        });

};


function lowerLoaderOn() {
    document.getElementById("loadRingLower").classList.add("visibility-vis");
};

function lowerLoaderOff() {
    document.getElementById("loadRingLower").classList.add("visibility-hid");
};


var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");