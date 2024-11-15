'use strict';

/*
    HUOM: tehtävä ei ole valmis.
    Käsittele hiiren poistuminen p-elementin päältä..
 */

// etsitään tarvittavat konponentit html-sivulta
const kuvaElem = document.querySelector('#target');
const tekstiElem = document.getElementById('trigger');

// määritellään tapahtumankäsittelijöiden funktiot
function hiiriPaalle(evt) {
    // kuvan  vaihtuu picA -> picB
    kuvaElem.src = 'img/picB.jpg';
}

// määritellään p-elementille tapahtumankäsittelijä, kuuntelee että tuleeko hiiri päälle
tekstiElem.addEventListener('mouseover', hiiriPaalle);
