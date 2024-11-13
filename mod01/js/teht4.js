'use strict';

// kysytään käyttäjältä lähtötiedot
const nimi = prompt("Mikä on nimesi: ")

// arvotaan tuvan numero 1-4.
// Päätetään 1 = Gryffindor, 2 = Slytherin jne.

const tuvanNro = 1 + Math.floor( Math.random() * 4)

let tuvanNimi       // muuttujan tyyppinä on nyt undefined

if (tuvanNro == 1) {
    tuvanNimi = "Gryffindor"
} else if (tuvanNro == 2) {
    tuvanNimi = "Slytherin"
} else {
    tuvanNimi = "um, I don't know.."
}
// tuvanNimi-muuttujan tyypiksi muuttui edellä string
// TODO: korjaa edellä oleva if- else if - else rakenne

// TODO: tuvan nimi pitäisi myös tulostaa...
let vastaus = `Hei ${nimi}, tupasi on ...`

const tAlue = document.querySelector('#tulosalue')
tAlue.innerHTML = `${vastaus}`