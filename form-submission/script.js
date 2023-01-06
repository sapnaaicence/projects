"use strict";
let firstname = document.querySelector("#firstname").value;
let lastname,
    emailId,
    phone,
    password,
    cpassword,
    empData = [];

let updateIndex = -1;

function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/.test();
    if (inputtxt.match(letters)) {
        return true;
    } else {
        // alert("message");
        return false;
    }
}

function message(errorText, msg) {
    document.querySelector(errorText).textContent = msg;
}

function validation() {
    let countError = 0;

    if (!firstname) {
        message(".firstname.error", "First Name cant be blank");
        countError++;
    } else if (firstname.length <= 2) {
        message(".firstname.error", "First Name must have min 3 char");
        countError++;
    } else if (allLetter(firstname)) {
        message(".firstname.error", "Type characters a-z or A-Z");
        countError++;
    } else {
        message(".firstname.error", "");
    }

    if (!lastname) {
        message(".lastname.error", "Last Name can not be blank");
        countError++;
    } else if (lastname.length <= 2) {
        message(".lastname.error", "Last Name must have min 3 char");
        countError++;
    } else if (allLetter(lastname)) {
        message(".lastname.error", "Type characters a-z or A-Z");
        countError++;
    } else {
        message(".lastname.error", "");
    }

    function emailletter(inputemail) {
        var emailletters =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (inputemail.match(emailletters)) return true;
        else return false;
    }

    if (!emailId) {
        message(".email.error", "Email id can not be blank");
        countError++;
    } else if (!emailletter(emailId)) {
        message(".email.error", "Email id is invalid.");
        countError++;
    } else {
        message(".email.error", "");
    }

    if (!phone) {
        message(".phone.error", "Phone number is required...");
        countError++;
    } else if (phone.length != 10) {
        message(".phone.error", "10 digits required...");
        countError++;
    } else {
        message(".phone.error", "");
    }

    if (!password) {
        message(".password.error", "Please type a new password");
        countError++;
    } else if (password.length <= 4) {
        message(".password.error", "Password is too short");
        countError++;
    } else if (password.length > 12) {
        message(".password.error", "Password must be less than 13 char");
        countError++;
    } else {
        message(".password.error", "");
    }

    if (!cpassword) {
        message(".cpassword.error", "Please enter password.");
        countError++;
    } else if (cpassword !== password) {
        message(".cpassword.error", "Password mismatch. Please try again");
        countError++;
    } else if (cpassword === password) {
        message(".cpassword.error", "");
    }

    if (countError > 0) {
        return false;
    }
    return true;
}

function saveEmployee() {
    firstname = document.querySelector("#firstname").value;
    lastname = document.querySelector("#lastname").value;
    emailId = document.querySelector("#email").value;
    phone = document.querySelector("#phone").value;
    password = document.querySelector("#password").value;
    cpassword = document.querySelector("#cpassword").value;
    let employee = {
        firstname: firstname,
        lastname: lastname,
        emailId: emailId,
        phone: phone,
        password: password,
        cpassword: cpassword,
    };

    if (validation()) {
        if (updateIndex == -1) {
            empData.push(employee);
        } else {
            empData[updateIndex] = employee;
            ``;
        }
        document.querySelector("#table-data").innerHTML = "";
        showEmployeeList();
        // resetFields();
    }
}

function deleteRow(x) {
    // At position 2, remove 2 items:
    console.log("X = ", x);
    empData.splice(x, 1);
    console.log(empData);
    document.querySelector("#table-data").innerHTML = "";
    showEmployeeList();
}

function editRow(x) {
    document.querySelector("#firstname").value = empData[x].firstname;
    document.querySelector("#lastname").value = empData[x].lastname;
    document.querySelector("#email").value = empData[x].emailId;
    document.querySelector("#phone").value = empData[x].phone;
    document.querySelector("#password").value = empData[x].password;
    document.querySelector("#cpassword").value = empData[x].cpassword;
    updateIndex = x;
}

function showEmployeeList() {
    let tableRef = document.querySelector("#table-data");

    for (let i = 0; i < empData.length; i++) {
        let newRow = tableRef.insertRow();
        let cell = newRow.insertCell();

        let newText = document.createTextNode(
            empData[i].firstname + " " + empData[i].lastname
        );
        cell.appendChild(newText);

        let cell2 = newRow.insertCell();

        let newText2 = document.createTextNode(empData[i].emailId);
        cell2.appendChild(newText2);

        let cell3 = newRow.insertCell();

        let newText3 = document.createTextNode(empData[i].phone);
        cell3.appendChild(newText3);

        let cell4 = newRow.insertCell();

        let newText4 = document.createTextNode(empData[i].password);
        cell4.appendChild(newText4);

        let cell5 = newRow.insertCell();

        let button1 = document.createElement("button");
        button1.innerHTML = "Delete";
        cell5.appendChild(button1);
        let button2 = document.createElement("button");
        button2.innerHTML = "Edit";
        cell5.appendChild(button2);
        let len = i;
        button1.addEventListener("click", function() {
            deleteRow(len);
        });
        button2.addEventListener("click", function() {
            editRow(len);
        });
    }
}
// console.log(tableContent);

function resetFields() {
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#cpassword").value = "";
}

document.querySelector("#submit").addEventListener("click", saveEmployee);