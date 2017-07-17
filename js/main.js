// main.js

var pacient = document.querySelector("#first-pacient");
var weightTD = pacient.querySelector(".info-weight");
var weight = weightTD.textContent;
var heightTD = pacient.querySelector(".info-height");
var height = heightTD.textContent;
var imcTD = pacient.querySelector(".info-imc");
var isWeightValid = true;
var isHeightValid = true;

if(weight <= 0 || weight >= 300) {
    console.log("Peso invalido!");
    isWeightValid = false;
    imcTD.textContent = "Peso invalido!";
}

if(height <= 0 || height >= 3.00) {
    console.log("Altura invalida!");
    isHeightValid = false;
    imcTD.textContent = "Altura invalida!";
}

if(isWeightValid && isHeightValid) {
    var imc = weight / (height * height);
    imcTD.textContent = imc;
}
