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
const closeModal = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fermer l'event formulaire
closeModal.forEach((c) => c.addEventListener("click", modalClose));
  // fermer modal form
  function modalClose(){
    modalbg.style.display = "none";
  }
// implementation du formulaire

           //liason des labels
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birth = document.getElementById("birthdate");
const numbTournament = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const checkBox1 = document.getElementById("checkbox1");
const submitBtn = document.querySelector(".btn-submit");
// definition du format de la date

// definition format des nombres
const numbers = /^[0-9]+$/;
// function validate modal form
function validate () {
  let firstNameCheck;
  let lastNameCheck;
  let eMailcheck;
  let birthCheck;
  let numTournamentCheck;
  let radioButtonsCheck;
  let conditionsCheck;

  console.log(validate);

 if (!firstName.value =="" || firstName.value == null || firstName.value.length < 2)
  {}
  else {}
if (!lastName.value == "" || lastName.value == null || lastName.value.length < 2)
  {}
  else {}
// email avec regex à definir if ()
if(!birth.value.match(/^\d{4}\-(0?[1-9]|1[012]])\-(0?[1-9]|[12][0-9]|3[01])$/)) // defiinition de la birthdate avec un instruction en regex
  {}
  else {}
if(!numbTournament.value.match(numbers)) 
{}
else {}
if(!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) 
{}
else {}
if(!checkBox1.checked)
{}
else {}
// validation si tous les elements checked sont valide 
}



