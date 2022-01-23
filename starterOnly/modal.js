// launch modal event
/*modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//suppression elements genant dans l'html lors de l'ouverture du formulaire en version mobil / tablette
const heroSection = document.querySelector('.hero-section');
const footer = document.querySelector('.copyrights');
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if(window.matchMedia("(max-width: 800px)").matches)  { //permet d'afficher le formulaire et de retirer les elements genants
    heroSection.style.display='none';
    footer.style.display='none';
  }
} */
// fermer l'event formulaire
/*closeModal.forEach((c) => c.addEventListener("click", modalClose));
  // fermer modal form
  function modalClose(){
    modalbg.style.display = "none";
    if(window.matchMedia("(max-width: 800px)").matches) { //permet d'afficher le formulaire et de retirer les éléments genants
      heroSection.style.display='block';
      footer.style.display='block';
    }
  } */
// implementation du formulaire relier avec les ID
// DOM Elements
const heroSection = document.querySelector('.hero-section');
const footer = document.querySelector('.copyrights');
let modalBody = document.querySelector(".modal-body");
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let closeModal = document.getElementsByClassName("close")[0];
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numbPart = document.querySelector("input[type=number]");
let submitBtn = document.getElementById('btn-submit');
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
modalFormLaunch();
modalFormClose();
disableSubmitBtn();
// addeventlistener pour executer les conditions requise afin de soumettre le formulaire
document.querySelector('form').addEventListener('change', FormValid);
document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', FirstNameValid);
lastName.addEventListener('input', LastNameValid);
email.addEventListener('input', EmailValid);
birthdate.addEventListener('input', BirthdateValid);
numbPart.addEventListener('input',NumbPartValid);
for (checkbox of locationCheckboxes) {
  checkbox.addEventListener('change', LocationValid);
}
conditionsCheckboxes.addEventListener('change', ConditionsValid);


// definition des fonctions
function editNav() { // fonction menu burger
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function submitForm(e) { // fonction submit pour envoyer les donner du formulaire et generer la modal de remerciment
  e.preventDefault();
  document.querySelector('.modal-body').innerHTML = " ";
  modalBody.style.height = "800px";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "flex-end";
  msgRemerciements();
  closeBtn();
}
function launchModal() { // fonction pour afficher le contenu de la modal
  modalbg.style.display = "block";
  if(window.matchMedia("(max-width: 800px)").matches)  { //permet d'afficher le formulaire et de retirer les elements genants
    heroSection.style.display='none';
    footer.style.display='none';
  }
}
function modalFormClose () { // fonction pour la fermer
  closeModal.onclick = function() {
  modalbg.style.display = "none";
  if(window.matchMedia("(max-width: 800px)").matches) { //permet d'afficher le formulaire et de retirer les éléments genants
    heroSection.style.display='block';
    footer.style.display='block';
  }
  };
}
function modalFormLaunch () { // fonction pour lancer la modal
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}
function closeBtn() { //creation du bouton pour la modal de remerciement
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Fermer";
  document.querySelector('.modal-body').appendChild(btn);
  btn.className = "btn-submit";
  btn.style.marginTop = "50px"
  btn.onclick = function() { // disparition de la modal contenant les donnes du formulaire pour afficher celle des remerciements
    modalbg.style.display = "none";
    };
}
function disableSubmitBtn () { // rendre le bouton inoperant quand le formulaire n'est pas valide
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  submitBtn.style.cursor = 'not-allowed';
}
function enableSubmitBtn () { // rendre le bouton operant quand le formulaire est valide
  submitBtn.disabled = false;
  submitBtn.style.opacity = '1';
  submitBtn.style.cursor = 'pointer';
}
function msgError(el) { // montrer le texte invalid
  el.setAttribute('data-error-visible', true);
}
function hideMsgError(el) { //cacher le texte invalid
  el.setAttribute('data-error-visible', false)
}
function FirstNameValid () {
  let parent = firstName.closest('div');
  if (firstName.value.length < 2) {
    msgError(parent);
    return false;
  } 
  if (firstName.value.length > 15) {
    msgError(parent);
    return false;
  }
  if (!/^([^0-9]*)$/.test(firstName.value)) {
    msgError(parent);
    return false;
  }
  hideMsgError(parent);
  return true;
}
function LastNameValid () {
  let parent = lastName.closest('div');
  msgError(parent);
  if (lastName.value.length < 2) {
    return false
  }
  if (!/^([^0-9]*)$/.test(lastName.value)) {
    return false;
  }
  hideMsgError(parent);
  return true;
}
function BirthdateValid () {
  let parent = birthdate.closest('div');
  let selectedDate = new Date(birthdate.value);
  let now = new Date();
  msgError(parent);
  parent.style.marginBottom='20px';
  if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(reserve.birthdate.value)) {
    return false;
  }
  if (selectedDate > now) {
    return false;
  }
  hideMsgError(parent);
  return true;
}
function EmailValid () {
  let parent = email.closest('div');
  msgError(parent);
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(reserve.email.value)) {
    return false;
  }
  hideMsgError(parent);
  return true;
}
function ConditionsValid () {
  let parent = conditionsCheckboxes.closest('div');
  msgError(parent);
  parent.style.marginBottom='25px'
  if (!conditionsCheckboxes.checked) {
    return false;
  }
    hideMsgError(parent);
    return true;
}
function LocationValid () {
  let parent = checkbox.closest('div');
  msgError(parent);
  for (checkbox of locationCheckboxes) {
    // console.log(checkbox);
    if (checkbox.checked) {
      hideMsgError(parent);
      return true;
    }
  }
}
function NumbPartValid () {
  let parent = numbPart.closest('div');
  msgError(parent);
  if (numbPart.value < '0') {
    return false;
  } 
    hideMsgError(parent);
    return true;
}
function FormValid() {
  if (FirstNameValid ()
      && LastNameValid ()
      && EmailValid ()
      && BirthdateValid ()
      && NumbPartValid ()
      && LocationValid ()
      && ConditionsValid()) 
      {
        enableSubmitBtn();
        return true;
      }
      disableSubmitBtn();
      return false;
}
function msgRemerciements() { //creation du texte de remercie dans la modal de remerciements
  let para = document.createElement("P");
  para.innerText = 'Merci pour\nvotre inscription';              
  document.querySelector('.modal-body').appendChild(para);
  para.style.marginBottom = '270px';
  para.style.textAlign='center';
  para.style.fontSize='35px';
}
// fermer la modal apres avoir envoyé le formulaire valide 
 // confirmationCloseButton[0].addEventListener("click", modalClose);
// fonction reset pour relancer le formulaire apres sa soumission 

