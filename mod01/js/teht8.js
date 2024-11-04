/*
    Tehtävän 8 js-koodin hahmotelma.
    Huomaa että tulostus ei ole haluttu.
 */

'use strict';

// kysytään käyttäjältä tarvittavat lähtötiedot numeroina
const alku = +prompt("Anna aloitusvuosi: ")
const loppu = +prompt("Anna loppuvuosi: ")

// käydään kaikki vuodet läpi yksitellen alkuvuodesta loppuvuoteen asti
// Muuttuja 'vuosi' saa yksitellen kaikki em. arvot
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
    // onko vuosi karkausvuosi?
    // ON jos
    // 'vuosi on jaollinen 400:lla' TAI
    //  ('vuosi on jaollinen 4:llä' JA 'EI ole jaollinen 100:lla')
    if ( (vuosi % 400 == 0)  || (vuosi % 4 == 0  && vuosi % 100 != 0) ) {
        document.querySelector('#tulosAlue').innerHTML +=
            `vuosi ${vuosi} on karkausvuosi <br>`
    }

}
