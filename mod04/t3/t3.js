'use strict';

/*
Open seli, seli:
    Copy-paste on kiireessä vaarallista touhua.
    Kopioin t3.html koodin suoraan t2.html -tiedostosta.
    Silloinhan head-osion <script> tagissa kutsuttiin t2.js koodia...
    Turha sitä on silloin etsiä virhettä t3.js -koodista :(
    Tuollaista ei tietenkään löydä kun polleana esittelee ratkaisua :-))))
 */

/*
    Tässä on yhdessä tehtyä alkua teht3 ratkaisuksi. Ks. tehtävän määrittelystä tarkemmin.
 */

// Etsitään form-elementti html-sivulta
const tvForm = document.querySelector('#tv');

// etsitään html-sivulta tulostusalue (id = 'results)
const resultsElem = document.querySelector('#results');

// Määritellään syöttölomakkeelle tapahtumankäsittelijä
tvForm.addEventListener('submit', async function (evt) {
    // estetään lomakkeen oletustoiminto eli action-parametrin suoritus
    evt.preventDefault();

    // luetaan syöttölomakkeelta käyttäjän kirjoittama arvo
    const query = document.querySelector('input[name=q]').value;

    try {
        // error handling: try/catch/finally
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`,
        ); // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json(); // retrieving the data retrieved from the response object using the json() function
        // console.log(jsonData); // log the result to the console

        // netin yli tehtävät jutut on suoritettu -> enää ei tarvita async ... await -tekniikoita
        resultsElem.innerHTML = "";         // tyhjennetään aluksi tulostusalue

        for (const tvShow of jsonData) {
            // muodostetaan sarjan otsikkotieto
            const h2Elem = document.createElement('h2');
            h2Elem.innerText = tvShow.show.name;

            // muodostetaan article-elementti, jonka sisään kaikki tv-sarjan tiedot tulevat
            const articleElem = document.createElement('article');

            // laitetaan articlen sisään kaikki sarjan tiedot
            articleElem.appendChild(h2Elem);

            // näytetään article (sis. sarjan tiedot) web-sivulla
            resultsElem.appendChild(articleElem);
        }

    } catch (error) {
        console.log(error.message);
    }
});
