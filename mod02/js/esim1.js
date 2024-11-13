'use strict';

// etsitään tulostusalue html-sivulta
const tulostus = document.querySelector('#tulosalue');

let tulos;      // kolikonheiton tulos (tyyppinä nyt undefined)

// arvotaan desimaaliarvo väliltä 0 - 0,999999...
let arvottu = Math.random();

// valitaan kolikonheiton tulos satunnaisluvun avulla
if (arvottu < 0.5) {
    tulos = "kruunu";
} else {
    tulos = "klaava";
}

tulostus.innerHTML = `Heitin kolikkoa, ${tulos} tuli! <br><br>`;

// --------

// kysytään lähtötiedot
let pituus = +prompt("Kuinka pitkä olet (cm): ");
pituus = pituus / 100;          // pituus metreinä
const painoStr = prompt("Paljonko painat: (kg): ");
const paino = parseInt(painoStr);

// lasketaan painoindeksi: paino / (pituus ^ 2)
let painoindeksi = paino / Math.pow(pituus, 2);

// ihannearvot välillä 18,5 ...  25, tulostetaan nyt BMI 1 desimeelilla
if (painoindeksi >= 18.5  &&  painoindeksi <= 25) {
    tulostus.innerHTML += `BMI = ${painoindeksi.toFixed(1)}, loistavaa! <br>`;
} else if (painoindeksi < 18.5) {
    tulostus.innerHTML += `BMI = ${painoindeksi.toFixed(1)}, painoa voisi olla enemmänkin <br>`;
} else {
    tulostus.innerHTML += `BMI = ${painoindeksi.toFixed(1)}, voi voi ... <br>`;
}

tulostus.innerHTML += `BMI on laskettu arvoilla ${pituus} m ja ${paino} kg`
