// patients-search.js

var addButton = document.querySelector("#search-patients");

addButton.addEventListener("click", function () {
    var request = new XMLHttpRequest();

    request.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    request.addEventListener("load", function () {
        var response = request.responseText;
        var patients = JSON.parse(response);

        patients.forEach(function (patient) {
            addPatientsToTable(patient);
        });
    });
    request.send();
});