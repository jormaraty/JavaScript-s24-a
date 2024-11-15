'use strict';

// etsitään ul-määritys html-sivulta
const ulElem = document.querySelector('#target');

// lisätään ulElem-elementtin sisältöä innerHTML avulla
ulElem.innerHTML =
    `
     <li>First item</li>
     <li>Second item</li>
     <li>Third item</li>
    `;

// määritellään tyyliasetus ulElem:lle
ulElem.classList.add('my-list');