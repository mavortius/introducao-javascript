// form.js

function getPatientFromForm(form) {
    return {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        imc: calcImc(form.weight.value, form.height.value)
    };
}

function mountTR(patient) {
    var patientTR = document.createElement("tr");
    var nameTD = document.createElement("td");
    var weightTD = document.createElement("td");
    var heightTD = document.createElement("td");
    var fatTD = document.createElement("td");
    var imcTD = document.createElement("td");

    nameTD.textContent = patient.name;
    weightTD.textContent = patient.weight;
    heightTD.textContent = patient.height;
    fatTD.textContent = patient.fat;
    imcTD.textContent = patient.imc;

    patientTR.appendChild(nameTD);
    patientTR.appendChild(weightTD);
    patientTR.appendChild(heightTD);
    patientTR.appendChild(fatTD);
    patientTR.appendChild(imcTD);

    return patientTR;
}

var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-add-patient");
    var patient = getPatientFromForm(form);
    var patientTR = mountTR(patient);
    var table = document.querySelector("#patient-table");

    table.appendChild(patientTR);
});