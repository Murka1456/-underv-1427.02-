let newTextContainer = document.querySelector('#newTextContainer');
let addText = document.querySelector("#addText");

//KNAPP FOR TEKST
let addText = document.querySelector('#addText');

addText.addEventListener('click', function () {
  let newText = document.createElement('h1');
  newText.textContent = 'Dette er ny tekst';
  newTextContainer.appendChild(newText);

});
let styleDiv = document.querySelector("#slyleContainer");
//knapp for farge
let addColor = document.querySelector("#addColor");
let addColor.addEventListener("click",function(){
  styleDiv.classList.add("red");
});

})
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
