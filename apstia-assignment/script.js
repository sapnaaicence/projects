"strict mode";
var timeEstimate = ['00:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM'];

let repeatTime = { 'everyDay': 'Every Day', 'everyWeek': 'Every Week', 'everyMonth': 'Every Month', 'everyYear': 'Every Year', 'customDay': 'Custom Day' };
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },

        );
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < timeEstimate.length; i++) {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', (i + 1) * 30);
        newOption.appendChild(document.createTextNode(timeEstimate[i]));


        let newOption2 = document.createElement('option');
        newOption2.setAttribute('value', (i + 1) * 30);
        newOption2.appendChild(document.createTextNode(timeEstimate[i]));


        let newOption3 = document.createElement('option');
        newOption3.setAttribute('value', (i + 1) * 30);
        newOption3.appendChild(document.createTextNode(timeEstimate[i]));

        let newOption4 = document.createElement('option');
        newOption4.setAttribute('value', (i + 1) * 30);
        newOption4.appendChild(document.createTextNode(timeEstimate[i]));

        let newOption5 = document.createElement('option');
        newOption5.setAttribute('value', (i + 1) * 30);
        newOption5.appendChild(document.createTextNode(timeEstimate[i]));


        document.querySelector('#time-estimate-dropdown').appendChild(newOption);
        document.querySelector('#everyDay-dropdown').appendChild(newOption2);
        document.querySelector('#everyWeek-dropdown').appendChild(newOption3);
        document.querySelector('#everyMonthTime-dropdown').appendChild(newOption4);
        document.querySelector('#everyYearMonthTime-dropdown').appendChild(newOption5);


    }

    for (let i = 1; i < 32; i++) {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', i);
        newOption.appendChild(document.createTextNode(i + ' Days'));
        document.querySelector('#everyMonth-dropdown').appendChild(newOption);


        let newOption2 = document.createElement('option');
        newOption2.setAttribute('value', i);
        newOption2.appendChild(document.createTextNode(i + ' Days'));
        document.querySelector('#everyMonthDays-dropdown').appendChild(newOption2);

    }

    for (const key in repeatTime) {
        if (Object.hasOwnProperty.call(repeatTime, key)) {
            const value = repeatTime[key];

            let newOption = document.createElement('option');
            newOption.setAttribute('value', key);
            newOption.appendChild(document.createTextNode(value));
            document.querySelector('#repeat-dropdown').appendChild(newOption);
        }
    }
});


function saveData() {

    let x = document.querySelector("#title") && document.querySelector("#title").value;
    let y = document.querySelector("#category") && document.querySelector("#category").value;
    let z = document.querySelector("#project") && document.querySelector("#project").value;
    let startDate =
        document.querySelector("#start-date") &&
        document.querySelector("#start-date").value;
    let dueDate =
        document.querySelector("#due-date") &&
        document.querySelector("#due-date").value;
    let gridCheck =
        document.querySelector("#no-due-date") &&
        document.querySelector("#no-due-date").checked;
    let assignTo =
        document.querySelector("#assignTo") &&
        document.querySelector("#assignTo").value;
    let desc =
        document.querySelector("#editor") &&
        document.querySelector("#editor").innerHTML;





    let label =
        document.querySelector("#label") && document.querySelector("#label").value;
    let milestone =
        document.querySelector("#milestone") &&
        document.querySelector("#milestone").value;
    let status =
        document.querySelector("#status") &&
        document.querySelector("#status").value;
    let priority =
        document.querySelector("#priority") &&
        document.querySelector("#priority").value;
    let makePrivate =
        document.querySelector("#make-private") &&
        document.querySelector("#make-private").checked;
    let billiable =
        document.querySelector("#billiable") &&
        document.querySelector("#billiable").checked;
    let timeEstimate =
        document.querySelector("#time-estimate") &&
        document.querySelector("#time-estimate").checked;

    let repeat =
        document.querySelector("#repeat") &&
        document.querySelector("#repeat").checked;


    let dependentTo =
        document.querySelector("#dependent-to-other") &&
        document.querySelector("#dependent-to-other").checked;
    let data = {
        title: x,
        category: y,
        project: z,
        startDate: startDate,
        noDueDate: gridCheck,
        assignTo: assignTo,
        desc: desc,
        label: label,
        milestone: milestone,
        status: status,
        priority: priority,
        makePrivate: makePrivate,
        billiable: billiable,
        timeEstimate: timeEstimate,
        repeat: repeat,
        dependentTo: dependentTo
    };

    if (!gridCheck) {
        data['dueDate'] = dueDate;
    }

    if (timeEstimate) {
        data['timeEstimateValue'] = {};
        data['timeEstimateValue']['timeEstimateTimeField'] = document.querySelector('#time-estimate-dropdown').value;
    }

    if (repeat) {
        data['repeatValue'] = {};

        data['repeatValue']['repeat-dropdown'] = document.querySelector('#repeat-dropdown').value;

        if (document.querySelector('#repeat-dropdown').value == 'everyDay') {

            data['repeatValue']['every-day-time-selection'] = document.querySelector('#everyDay-dropdown').value;

        }

        if (document.querySelector('#repeat-dropdown').value == 'everyWeek') {

            data['repeatValue']['every-week-time-selection'] = document.querySelector('#everyWeek-dropdown').value;
            data['repeatValue']['every-week-days'] = {
                monday: document.querySelector('#every-week-mon').checked,
                tuesday: document.querySelector('#every-week-tue').checked,
                wednesday: document.querySelector('#every-week-wed').checked,
                thursday: document.querySelector('#every-week-thu').checked,
                friday: document.querySelector('#every-week-fri').checked,
                saturday: document.querySelector('#every-week-sat').checked,
                sunday: document.querySelector('#every-week-sun').checked,
            };

        }

        if (document.querySelector('#repeat-dropdown').value == 'everyMonth') {

            data['repeatValue']['every-month-day-selection'] = document.querySelector('#everyMonth-dropdown').value;
            data['repeatValue']['every-month-time-selection'] = document.querySelector('#everyMonthTime-dropdown').value;
        }

        if (document.querySelector('#repeat-dropdown').value == 'everyYear') {

            data['repeatValue']['every-year-month-List-selection'] = document.querySelector('#everyMonthList-dropdown').value;
            data['repeatValue']['every-year-month-day-selection'] = document.querySelector('#everyMonthDays-dropdown').value;
            data['repeatValue']['every-year-mont'] = document.querySelector('#everyYearMonthTime-dropdown').value;
        }


    }
    else { }
    console.table(data);
    return false;
}


document.querySelector('#no-due-date').addEventListener('change', () => {
    let isDisabled = document.querySelector('#no-due-date').checked ? true : false
    if (isDisabled) {
        document.querySelector('#due-date').setAttribute('disabled', true);
    } else {
        document.querySelector('#due-date').removeAttribute('disabled');
    }
});

document.querySelector('#time-estimate').addEventListener('change', () => {
    document.querySelector('#time-show').style.display = document.querySelector('#time-estimate').checked ? 'block' : 'none';
});

document.querySelector('#repeat').addEventListener('change', () => {
    document.querySelector('#repeat-show').style.display = document.querySelector('#repeat').checked ? 'flex' : 'none';
});


document.querySelector('#repeat-dropdown').addEventListener('change', () => {
    let repeatDropdownValue = document.querySelector('#repeat-dropdown').value;
    document.querySelector('#everyday-content').style.display = repeatDropdownValue == 'everyDay' ? 'block' : 'none';
    document.querySelector('#everyweek-content').style.display = repeatDropdownValue == 'everyWeek' ? 'block' : 'none';
    document.querySelector('#everymonth-content').style.display = repeatDropdownValue == 'everyMonth' ? 'block' : 'none';
    document.querySelector('#everyyear-content').style.display = repeatDropdownValue == 'everyYear' ? 'block' : 'none';
});

