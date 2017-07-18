// main.js

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
    var patient = patients[i];
    var weightTD = patient.querySelector(".info-weight");
    var weight = weightTD.textContent;
    var heightTD = patient.querySelector(".info-height");
    var height = heightTD.textContent;
    var imcTD = patient.querySelector(".info-imc");
    var isWeightValid = true;
    var isHeightValid = true;

    if(weight <= 0 || weight >= 300) {
        console.log("Peso invalido!");
        isWeightValid = false;
        imcTD.textContent = "Peso invalido!";
        patient.classList.add("patient-invalid");
    }

    if(height <= 0 || height >= 3.00) {
        console.log("Altura invalida!");
        isHeightValid = false;
        imcTD.textContent = "Altura invalida!";
        patient.classList.add("patient-invalid");
    }

    if(isWeightValid && isHeightValid) {
        var imc = weight / (height * height);
        imcTD.textContent = imc.toFixed(2);
    }
}

var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function () {
    console.log("Botao clicado.");
});
