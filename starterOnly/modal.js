'use strict'
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// validation des champs du formulaire
let contactForm = document.getElementById('frmContact');

contactForm.addEventListener('submit', (e) => {
e.preventDefault();
let fields = document.querySelectorAll('input[required], textarea [required]');
console.log(fields);
let valid = true;

fields.forEach((field) => {
   if(! validateField(field)) {
      valid = false;
   }
});
if (valid) {
  e.target.submit();
}




}, false);
function validateField(field) {
  if(field.checkValidity()) {
    return true;
  }else {
    return false;
  }
}
