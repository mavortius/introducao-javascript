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

    patientTR.classList.add("patient");

    patientTR.appendChild(mountTD(patient.name, "info-name"));
    patientTR.appendChild(mountTD(patient.weight, "info-weight"));
    patientTR.appendChild(mountTD(patient.height, "info-height"));
    patientTR.appendChild(mountTD(patient.fat, "info-fat"));
    patientTR.appendChild(mountTD(patient.imc, "info-imc"));

    return patientTR;
}

function mountTD(data, styleClass) {
    var td = document.createElement("td");

    td.classList.add(styleClass);

    td.textContent = data;

    return td;
}

function validatePatient(patient) {
    var errors = [];
    
    if (patient.name.length === 0) {
        errors.push("O nome não pode ser em branco");
    }

    if (patient.fat.length === 0) {
        errors.push("A gordura não pode ser em branco");
    }

    if (patient.weight.length === 0) {
        errors.push("O peso não pode ser em branco");
    }

    if (patient.height.length === 0) {
        errors.push("A altura não pode ser em branco");
    }
    
    if (!validateWeight(patient.weight)) {
        errors.push("Peso invalido!");
    }
    if (!validateHeight(patient.height)) {
        errors.push("Altura invalida!");
    }
    return errors;

}
function showErrorMessages(errors) {
    var ul = document.querySelector("#error-messages");
    ul.innerHTML = "";

    errors.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);

    });
}

function addPatientsToTable(patient) {
    var patientTR = mountTR(patient);
    var table = document.querySelector("#patient-table");

    table.appendChild(patientTR);
}

var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-add-patient");
    var patient = getPatientFromForm(form);
    var errors = validatePatient(patient);

    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    addPatientsToTable(patient);
    form.reset();

    var errorMessages = document.querySelector("#error-messages");
    errorMessages.innerHTML = "";
});