var deButton = document.querySelector("button");
var Menu = document.querySelector("#menu");


var Countryknop = document.querySelector(".buttoncountries");
var Countries = document.querySelector("#contentcountries");


var Profesknop = document.querySelector(".buttonprofessions");
var Professions = document.querySelector("#contentprofessions");


deButton.addEventListener("click", openMenu);
Countryknop.addEventListener("click", openCountries);
Profesknop.addEventListener("click", openProfessions);

function openMenu() {
  document.body.classList.toggle("menuOpen");
    Menu.classList.toggle("invisible");
}

function openCountries() {
    Countries.classList.toggle("invisible");
}

function openProfessions() {
    Professions.classList.toggle("invisible");
}

