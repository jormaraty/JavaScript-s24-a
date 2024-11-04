/*
    Tämä tiedosto toimii yhteistyössä ../Esim2.html kanssa.
    '../' viittaa ylemmän tason eli mod01 kansioon.
    Ohjelman logiikka sijaitsee nyt täällä.
 */

'use strict';       // tiukka moodi

// kysytään numeroarvo +prompt(...) avulla.
// +prompt() muuntaa syötteen heti numeroksi.
const eka = +prompt("Anna eka kokonaisluku: ");

// vastaava prompt() avulla
const tokaStr = prompt("Anna toinen kokonaisluku: ");    // saadaan tekstiä
// muunnetaan saatu tekstiarvo numeroksi ns. 'parsimalla'.
const toka = parseInt(tokaStr);

let summa = eka + toka;      // laskee nyt numeroilla eli oikein

// etsitään html-sivulta tulostuksen paikka
const tAlue = document.querySelector("#tulostusalue");

// tulostetaan html-sivulle tekstiä, muuttuja tulostetaan nyt tekstin keskellä.
// Huomaa että erikoiset taaksepäin olevat heittomerkit ovat nyt pakolliset
// Huomaa myös rivinvaihdon tekeminen.
tAlue.innerHTML = `Lukujesi ${eka} ja ${toka} <br>`

// tulostetaan seuraava rivi edellisten perään '+='
tAlue.innerHTML += `summa on ${summa}, <br>`
// laskutoimitus tulostuksessa
tAlue.innerHTML += `ja niiden tulo on ${eka * toka}`
