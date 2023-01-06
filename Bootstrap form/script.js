"use strict";
let empname, email, password, gender, comment;

function add() {
  console.log("Click");

  empname = document.querySelector("#fullname").value;
  email = document.querySelector("#address").value;
  password = document.querySelector("#password").value;
  gender = document.querySelector('input[name="gender"]:checked').value;
  comment = document.querySelector("#comment").value;
  console.log(empname, email, password, comment, gender);

  resetList();
  showData();
  return false;
}

function showData() {
  document.getElementById("fullname1").innerHTML = empname;
  document.getElementById("emailaddress1").innerHTML = email;
  document.getElementById("password1").innerHTML = "*********";
  document.getElementById("gender1").innerHTML = gender;
  document.getElementById("comment1").innerHTML = comment;
}

function resetList() {
  document.querySelector("#fullname").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#comment").value = "";
}

document.getElementById("myForm").addEventListener("submit", (event) => {
  // handle the form data
  event.preventDefault();
  add();
});
