'use strict';

// etsitään tuloskohta html-sivulta
const tulostus =
    document.querySelector('#tulosAlue')

// luodaan tyhjä taulukko/lista lukuja varten
let luvut = []

// kysytään käyttäjältä arvot ja lisään ne listaan
for (let i = 0; i< 5; i++)  {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    luvut.push(arvo)
}

tulostus.innerHTML =
    `Tulostetaan taulukon arvot for-toistolla <br>`

for (let i = 0; i < luvut.length; i++)  {
    tulostus.innerHTML += `${luvut[i]} <br>`
}

tulostus.innerHTML += `Lajitellaan numerot suuruusjärjestykseen <br>`

// numerot joudutaan lajittelemaan ns. nuolifunktion avulla,
// oletuksena on lajittelu aakkosjärjestykseen eli 11, 213, 3, 4
luvut.sort((a, b) => a - b)

tulostus.innerHTML += `Luvut tulostetaan for .. of -toistolla <br>`
for (let arvo of luvut) {
    tulostus.innerHTML += `${arvo} <br>`
}
