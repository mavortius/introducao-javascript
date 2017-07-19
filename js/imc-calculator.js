// imc-calculator.js

function calcImc(weight, height) {
    var imc;
    imc = weight / (height * height);

    return imc.toFixed(2);
}

function validateWeight(weight) {
    return (weight >= 0 && weight <= 300);
}

function validateHeight(height) {
    return (height >= 0 && height <= 3.00);
}

var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";
var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
    var patient = patients[i];
    var weightTD = patient.querySelector(".info-weight");
    var weight = weightTD.textContent;
    var heightTD = patient.querySelector(".info-height");
    var height = heightTD.textContent;
    var imcTD = patient.querySelector(".info-imc");
    var isWeightValid = validateWeight(weight);
    var isHeightValid = validateHeight(height);

    if(!isWeightValid) {
        console.log("Peso invalido!");
        isWeightValid = false;
        imcTD.textContent = "Peso invalido!";
        patient.classList.add("patient-invalid");
    }

    if(!isHeightValid) {
        console.log("Altura invalida!");
        isHeightValid = false;
        imcTD.textContent = "Altura invalida!";
        patient.classList.add("patient-invalid");
    }

    if(isWeightValid && isHeightValid) {
        var imc = calcImc(weight, height);
        imcTD.textContent = imc;
    }
}


