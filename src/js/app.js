import Handlebars from 'handlebars';

(() => {
    'use strict';

  /* fetch('http://localhost:3000/fakeEmployees')
    .then(response => response.json())
    .then(fakeEmployees => {
        var table = document.getElementById('fakeEmployees');
        for(let i = 0; i < fakeEmployees.length; ++i) {
            let row = table.insertRow(i);
            let cell = row.insertCell();
            cell.textContent = fakeEmployees[i].name;
        }
      

    }) */

    var szablon = Handlebars.compile(
        document.getElementById("workers-template").innerHTML);
       function showAll() {
        fetch('http://localhost:3000/fakeEmployees')
        .then(response => response.json())
        .then(fakeEmployees => {
        document.getElementById('kontener').innerHTML =
        szablon(fakeEmployees);
        })
       }
       showAll();



       document.forms.workersForm.onsubmit = function () {
          
        let fakeEmployees = {
            name: this.imie.value,
            surname: this.surname.value,
            sex: this.sex.value,
            salary: this.salary.value,
            jobSeniority: this.jobSeniority.value,
            adrress : {
                street: this.street.value
            }
         
        };
        
        
        fetch('http://localhost:3000/fakeEmployees', {
        method: "post",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(fakeEmployees)
        })
        .then(response => response.json())
        .then(fakeEmployees => {
        showAll();
        });
        return false;
       }

})();





   