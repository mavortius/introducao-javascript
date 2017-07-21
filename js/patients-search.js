// patients-search.js

var addButton = document.querySelector("#search-patients");

addButton.addEventListener("click", function () {
    var request = new XMLHttpRequest();

    request.open("GET", "http://localhost:8080/api/patients");

    console.log(request.status);

    request.addEventListener("load", function () {
        var ajaxError = document.querySelector("#ajax-error");

        console.log(request.status);

        if(request.status === 200) {
            var response = request.responseText;
            var patients = JSON.parse(response);

            ajaxError.classList.add("invisible");
            patients.forEach(function (patient) {
                addPatientsToTable(patient);
            });
        } else {
            ajaxError.classList.remove("invisible");
        }
    });
    request.send();
});