// haetaan viittaus ekaan h1 elementtiin domissa ja sijoitetaan muuttujaan
const h1Element = document.querySelector('h1');

console.log('viittaus ekaan h1 elementtiin domissa', h1Element);

// haetaan viittaus ensimmäiseen .text luokan sisältävään elementtiin
document.querySelector('.text').innerText = 'Päivitetty teksti';

// haetaan viittaus kaikkiin .text luokan sisältäviin elementteihin
const textElements = document.querySelectorAll('.text');
console.log('.text elementit', textElements);

// päivitetään toista esiintymää
textElements[1].innerText = 'Päivitetty JS:n kautta';

// haetaan viittaus jo olemassa olevan dom-viittauksen avulla
console.log(h1Element.parentElement.querySelector('p'));

// lisätään uusi tekstikappale bodyyn
const pElement = document.createElement('p');
pElement.textContent = 'Uusi kappale.'
h1Element.parentElement.append(pElement);

function locateUser() {
    // BOM (window-objekti tarjoaa rajapinnan selaimen toiminnallisuuksiin)
    const confirmed = window.confirm("Aloita paikannus?"); // toimii myös alert()
    // if cancelled, exit function
    if (!confirmed) {
        return;
    }
    // esim. window.document
    const pLocation = document.createElement('p');
    pLocation.textContent = 'paikannetaan...';
    document.querySelector('body').append(pLocation);
    // geolocation api (materiaalissa kokonainen karttaesimerkki)
    // tässä tulostetaan vain koordinaatit, eikä ole virheenkäsittelyä
    navigator.geolocation.getCurrentPosition(function (location) {
        console.log('paikannettu: ', location);
        pLocation.textContent = `Sijaintisi: ${location.coords.latitude},
            ${location.coords.longitude}, tarkkuus: ${location.coords.accuracy}`;
    });
}

// sijainti (selaimen url)
console.log(location.href)

// Tapahtumankäsittely (eventit)
const locateButton = document.querySelector('#locate');
locateButton.addEventListener('click', function (event) {
    console.log('button clicked, event object:', event);
    locateUser();
});

// Mouse event -esimerkki
document.addEventListener('mousemove', function (event) {
    //console.log('hiiri liikkuu', event);
    pElement.textContent = `Hiiren sijainti ruudulla: ${event.clientX}, ${event.clientY} `;
});
// hover
h1Element.addEventListener('mouseenter', function () {
    h1Element.style.fontSize = '2em';
});
h1Element.addEventListener('mouseleave', function () {
    h1Element.style.fontSize = '1em';
});

// keyboard event -esimerkki
let fontSize = 12;
const keyloggerBuffer = [];
document.addEventListener('keypress', function (event){
    keyloggerBuffer.push(event.key)
    //console.log('keypress event', event);
    console.log('keys pressed: ', keyloggerBuffer)
    // press z / shift-x
    if (event.key === 'z') {
        fontSize++;
    } else if (event.key === 'Z') {
        fontSize--;
    }
    pElement.style.fontSize = fontSize+ 'px';
});

// prevent default behaviour of an event
const formElem = document.querySelector('form');
formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form event', event);
});

console.log("ohjelman loppu");
