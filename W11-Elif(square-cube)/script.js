let squaredResult = document.getElementById("squared-result");
let cubedResult = document.getElementById("cubed-result");
let inputNumber = document.getElementById("input-number");
let historyContainer = document.getElementById("history-container");


function calculateResult(){
    squaredResult.innerHTML = inputNumber.value * inputNumber.value;
    cubedResult.innerHTML = inputNumber.value * inputNumber.value * inputNumber.value;
    // console.log(squaredResult);
    // console.log(cubedResult);
    // .innerHTML is what shows on the webpage

    let newNumber = document.createElement("p");
    newNumber.innerHTML = inputNumber.value;
    newNumber.setAttribute("id","search"); // to set an ID
    historyContainer.appendChild(newNumber); // to add newNumber inside our empty div
    inputNumber.value = " "; // pour effacer ce qui est déjà saisi
}

function deleteSearchItem(){
    let toRemove = document.getElementById("search");
    historyContainer.removeChild(toRemove); // remove the variable "toRemove" that is just created
}



