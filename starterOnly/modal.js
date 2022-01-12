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
  // close modal form
  function modalClose(){
    modalbg.style.display = "none";
  }


/*
//close modal

for (var i = 0; i < document.getElementsByClassName('js-close-modal').length; i++) {
    document.getElementsByClassName('js-close-modal')[i].addEventListener('click', function () {
        document.querySelector('.content',).classList.remove('d-flex');
        document.querySelector('.content').classList.add('d-none');
    })
}

// toggle modal

document.querySelector('.js-toggle-modal').addEventListener('click', function(){
    document.querySelector('.content').classList.remove('d-none');
    document.querySelector('.content').classList.add('d-flex');
})

*/


