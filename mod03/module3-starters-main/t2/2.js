'use strict';

// etsitään ul-määritys html-sivulta
const ulElem = document.querySelector('#target');

// luodaan uuden li-elementin
let li1Elem = document.createElement('li');
// muodostetaan uusi teksti-elementti
let t1Elem = document.createTextNode('First item');
// laitetaan li-elementin sisään eli lapseksi äskeisen teksti-elementin
li1Elem.appendChild(t1Elem);

let li2Elem = document.createElement('li');
// lisätään li-elementille sen tekstisisältö, Huom: nyt lyhyempi tapa
li2Elem.textContent = 'Second item333';

// TODO: tee kolmas li-elementti

// lisätään luodut li-elementit ul-elementin sisään
// -> ahkeroinnin tulos näkyy myös web-sivulla.
ulElem.appendChild(li1Elem);
ulElem.appendChild(li2Elem);

// lisätään uk-elementille css-määrittely
ulElem.classList.add('my-item');

