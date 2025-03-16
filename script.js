
let newTextContainer = document.querySelector('#newTextContainer');
//KNAPP JEG HAR LAGET SELV
const button = document.querySelector('#button');
function Myfunction() {
  console.log('beskjed fra function');
}

button.addEventListener('click', Myfunction);

// letaddTex

//KNAPP FOR FARGER
let addColor = document.querySelector('#addColor');

addColor.addEventListener('click', function () {
  console.log('dette er knapp for farger');
});

//KNAPP FOR TEKST
let addText = document.querySelector('#addText');

addText.addEventListener('click', function () {
  let newText = document.createElement('h1');
  newText.textContent = 'Dette er ny text';
  newTextContainer.appendChild(newText);

  console.log('dette er knapp for TEKST');
});
// /knapp for farge
let styleContainer = document.querySelector('#styleContainer');
let Pushknapp = document.querySelector('#Pushknapp');
Pushknapp.addEventListener('click', function () {
  styleContainer.classList.add('yellow');
});
let newTextContainer = document.querySelector('#newTextContainer');

//Dette er knapp for tekst
let addText = document.querySelector('#addText');

//Dette er eventListener for tekst
addText.addEventListener('click', function () {
  let newText = document.createElement('h1'); //her lager vi tekstelement

  newText.textContent = 'Dette er ny tekst'; //her legger vi til tekst på elementet

  newTextContainer.appendChild(newText); //Her legger vi variabel med tekst inn i div i HTML
});

//
//
